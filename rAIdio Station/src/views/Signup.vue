<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";  // your existing client

const router = useRouter();

// Form fields
const name = ref("");
const studentId = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const formMsg = ref("");
const msgClass = ref("");

// Handle signup
const signup = async () => {
  formMsg.value = "";
  msgClass.value = "";

  try {
    // 1️⃣ Check if profile already exists
    const { data: existingProfile } = await supabase
      .from("profiles")
      .select("email")
      .eq("email", email.value)
      .maybeSingle();

    if (existingProfile) {
      msgClass.value = "error";
      formMsg.value = "This email is already registered.";
      return;
    }

    // 2️⃣ Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (authError) {
      msgClass.value = "error";
      formMsg.value = authError.message;
      return;
    }

    // 3️⃣ Insert profile into profiles table
    if (authData.user) {
      await supabase.from("profiles").insert([
        {
          id: authData.user.id,
          name: name.value,
          student_id: studentId.value,
          email: email.value,
          phone: phone.value,
          role: "user",
        },
      ]);
    }

    // 4️⃣ Success
    msgClass.value = "success";
    formMsg.value = "Signup successful! Please verify your email.";

    setTimeout(() => {
      router.push("/login");
    }, 1500);

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
        <input v-model="email" type="email" required />

        <label>Phone:</label>
        <input v-model="phone" type="text" />

        <label>Password:</label>
        <input v-model="password" type="password" required />

        <button type="submit">Sign Up</button>

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
