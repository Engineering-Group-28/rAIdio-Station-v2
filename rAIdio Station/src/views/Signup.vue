<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

const router = useRouter();

const name = ref("");
const studentId = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const formMsg = ref("");
const msgClass = ref("");

const isGoogleUser = ref(false); // TRUE when user logged in using Google

onMounted(async () => {
  // Check if there is an active session → Google/SSO user
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData?.session;

  if (session) {
    const user = session.user;

    isGoogleUser.value = true;
    email.value = user.email;

    // 🛑 FAU email enforcement
    if (!email.value.endsWith("@fau.edu")) {
      alert("Only @fau.edu accounts are allowed.");
      await supabase.auth.signOut();
      router.push("/login");
      return;
    }
  }
});

const signup = async () => {
  formMsg.value = "";
  msgClass.value = "";

  try {
    // 1️⃣ Check if profile already exists
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("id")
      .eq("email", email.value)
      .maybeSingle();

    if (existingProfile) {
      msgClass.value = "error";
      formMsg.value = "This email is already registered.";
      return;
    }

    let userId = null;

    if (isGoogleUser.value) {
      // 🔵 GOOGLE FLOW: User already exists in auth
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;

      if (!session) {
        msgClass.value = "error";
        formMsg.value = "Session lost. Please log in again.";
        return;
      }

      userId = session.user.id;

       if (password.value.trim().length > 0) {
    const { error: pwError } = await supabase.auth.updateUser({
      password: password.value,
    });

    if (pwError) {
      msgClass.value = "error";
      formMsg.value = "Failed to set password.";
      return;
    }
  }

      // Insert profile only
      await supabase.from("profiles").insert([
        {
          id: userId,
          name: name.value,
          student_id: studentId.value,
          email: email.value,
          phone: phone.value,
          role: "user",
        },
      ]);

      msgClass.value = "success";
      formMsg.value = "Profile created successfully!";
      setTimeout(() => router.push("/profile"), 1000);
      return;
    }

    // 🔵 NORMAL SIGNUP FLOW (email + password)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (authError) {
      msgClass.value = "error";
      formMsg.value = authError.message;
      return;
    }

    userId = authData.user.id;

    // Insert profile
    await supabase.from("profiles").insert([
      {
        id: userId,
        name: name.value,
        student_id: studentId.value,
        email: email.value,
        phone: phone.value,
        role: "user",
      },
    ]);

    msgClass.value = "success";
    formMsg.value = "Signup successful! Check your email.";

    setTimeout(() => router.push("/login"), 1500);
  } catch (err) {
    msgClass.value = "error";
    formMsg.value = "Unexpected error.";
    console.error(err);
  }
};
</script>


<template>
  <main>
    <div class="container">
      <h1>Sign Up</h1>

      <form @submit.prevent="signup">

  <label>Name:</label>
  <input v-model="name" type="text" required />

  <label>Student ID:</label>
  <input v-model="studentId" type="text" required />

  <label>Email:</label>
  <input 
    v-model="email" 
    type="email" 
    :readonly="isGoogleUser"
    required 
  />

  <label>Phone:</label>
  <input v-model="phone" type="text" />

  <!-- ⭐ PASSWORD RULES:
        - NORMAL signup → required
        - GOOGLE signup → optional 
  -->
  <label>Password:</label>
  <input
    v-model="password"
    type="password"
    :required="!isGoogleUser"
    :placeholder="isGoogleUser 
      ? 'Optional — set a password if you want email login' 
      : 'Create a password'"
  />

  <button type="submit">
    {{ isGoogleUser ? "Complete Signup" : "Sign Up" }}
  </button>

  <p :class="msgClass">{{ formMsg }}</p>
</form>
    </div>


    <div class="footer">
      <p class="lato-regular">
        <span style="color: #FFFFFF;">
          © 2025 FAU Engineering rAIdio Station. All rights reserved. |
        </span>
        <a href="/privacy">Privacy Policy</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
/* your existing styles preserved */
.container {
  width: 600px;
  margin: auto;
  background: #c9c0c0;
  padding: 20px;
  border-radius: 8px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 10px;
  background-color: #003366;
  color: white;
  border: none;
}
button:hover {
  background-color: #45B0DE;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
