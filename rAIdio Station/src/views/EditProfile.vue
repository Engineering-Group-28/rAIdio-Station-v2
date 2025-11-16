<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

const router = useRouter();

// Form fields
const name = ref("");
const studentId = ref("");
const email = ref("");
const phone = ref("");

const msg = ref("");
const session = ref(null);

async function loadProfile() {
  const { data } = await supabase.auth.getSession();
  session.value = data.session;

  if (!session.value) {
    router.push("/login");
    return;
  }

  const userId = session.value.user.id;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) {
    msg.value = "Failed to load profile.";
    console.error(error);
    return;
  }

  // Prefill form with profile data
  name.value = profile.name || "";
  studentId.value = profile.student_id || "";
  email.value = profile.email || session.value.user.email;
  phone.value = profile.phone || "";
}

// UPDATE PROFILE
async function updateProfile() {
  msg.value = "";

  const userId = session.value.user.id;

  // Check whether new email is already used
  const { data: existing, error: checkError } = await supabase
    .from("profiles")
    .select("id, email")
    .eq("email", email.value)
    .maybeSingle();

  if (checkError) {
    msg.value = "Error checking email.";
    console.error(checkError);
    return;
  }

  if (existing && existing.id !== userId) {
    msg.value = "This email is already registered.";
    return;
  }

  // Update the row
  const { error } = await supabase
    .from("profiles")
    .update({
      name: name.value,
      student_id: studentId.value,
      email: email.value,
      phone: phone.value,
    })
    .eq("id", userId);

  if (error) {
    msg.value = "Failed to update profile.";
    console.error(error);
    return;
  }

  msg.value = "Profile updated successfully!";
  setTimeout(() => router.push("/profile"), 1500);
}

onMounted(() => {
  loadProfile();
});
</script>

<template>
  <main>
    <p style="margin:0; background-color:#F5F7FA; text-align:center;">
      <span class="lato-bold" style="font-size:150%;">Update Profile</span>
    </p>

    <div class="container">
      <form @submit.prevent="updateProfile">
        <label>Name:</label>
        <input type="text" v-model="name" required />

        <label>Student ID:</label>
        <input type="text" v-model="studentId" required />

        <label>Email:</label>
        <input type="email" v-model="email" required />

        <label>Phone:</label>
        <input type="text" v-model="phone" />

        <button type="submit">Update</button>
        <p :class="msg.includes('successfully') ? 'success' : 'error'">
          {{ msg }}
        </p>
      </form>
    </div>

    <div class="footer">
      <p class="lato-regular">
        <span style="color:white;">
          © 2025 FAU Engineering rAIdio Station.
        </span>
        <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #d1d1d1;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 6px;
}

button {
  background: #003366;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
}

button:hover {
  background: #1a6bb8;
}

.success {
  color: green;
}

.error {
  color: red;
}

.footer {
  text-align: center;
  background: #003366;
  padding: 10px;
  margin-top: 30px;
}

.footer a {
  color: #85B9EB;
}
</style>
