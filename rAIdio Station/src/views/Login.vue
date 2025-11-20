<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";

const email = ref("");
const password = ref("");
const msg = ref("");

const router = useRouter();

const login = async () => {
  msg.value = "";

  // 1. Clear any previous session
  await supabase.auth.signOut();

  // 2. Login attempt
  const { error: loginError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (loginError) {
    msg.value = "Login failed: " + loginError.message;
    return;
  }

  // 3. Fetch fresh session
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;

  if (!session) {
    msg.value = "Error: Unable to load session.";
    return;
  }

  const user = session.user;

   //⭐ 4. FAU email enforcement
  if (!user.email.toLowerCase().endsWith("@fau.edu")) {
    await supabase.auth.signOut();
    alert("Only @fau.edu email accounts are allowed.");
    router.push("/login");
    return;
  }

  // 5. Load profile (optional)
  const { error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError) {
    console.warn("Profile missing:", profileError);
  }

  // 6. Redirect to profile
  msg.value = "Login successful! Redirecting…";

  setTimeout(() => router.push("/profile"), 500);
};

const loginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/profile"
    }
  });

  if (error) {
    msg.value = "Google login failed: " + error.message;
  }
};
</script>




<template>
  <main>
    <p style="margin:0; background-color: #F5F7FA; text-align:center;">
      <span class="lato-bold" style="font-size:150%;">Login</span>
    </p><br>

    <form @submit.prevent="login" id="loginForm">
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>

      <button type="submit">Login</button>
      <button type="button" @click="loginWithGoogle">Login with Google</button>

      <div class="signup-link">
        <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
      </div>
    </form>

    <p id="msg" style="text-align:center; color: red;">{{ msg }}</p>

    <div class="footer">
      <p class="lato-regular">
        <span style="color: #FFFFFF;">
          © 2025 FAU Engineering rAIdio Station. All rights reserved. |
        </span>
        <router-link to="/privacy" style="color:#85B9EB">Privacy Policy</router-link>
      </p>
    </div>
  </main>
</template>

<style scoped>
/* General Styles */
  .lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.graphic {
  width: 85%;
}

.logo {
  height: 60%;
}

h1 {
  color: #292A2B; 
  margin-bottom: 5px; 
  line-height: 1.15; 
  font-size: 60px;
  text-align: left;
}

p  {
  color: #292A2B; 
  text-align: left;
  margin: 6%;
  margin-bottom: 0;
  line-height: 1.5; 
  padding: 20px 20px 20px 20px;
  }

body {
  margin: 0; 
  padding: 0; 
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  }

html {background-color: #FFFFFF; margin: 0; padding: 0; height: 100%;}
    body {
      margin: 0;
      padding: 0;
      font-family: 'Lexend', sans-serif;
      background-color: #ffffff;
      color: #292A2B;
    }

    h1, h2 {
      text-align: center;
      color: #003366;
    }

    p {
      line-height: 1.6;
      margin: 10px 0;
    }

    a {
      text-decoration: none;
      color: #003366;
    }

    a:hover {
      text-decoration: underline;
    }

   .topnav {
  display: flex;
  align-items: center;
  height: 10%;
  text-decoration: none;
  column-gap: 20px;
  overflow: hidden;
  margin: 0;
  padding: 0px 60px 0px 60px;
  background-image: white;
}

.topnav a {
  display: inline-block;
  text-decoration: none;
  color: #292A2B;
  padding: 14px 16px;
  font-size: 15px;
}

.topnav a:hover {
  color: #85B9EB;
}

.topnav a.active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 100%;
  color: #85B9EB;
}

.topnav input[type=search] {
  margin-left: auto;
  padding: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 4px;
  margin-right: 16px;
  font-size: 14px;
  border-radius: 23px;
}

.button {
  background-color: #003366;
  border: none;
  color: white;
  padding: 15px 25px 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 2px;
  cursor: pointer;
}
.button1 {border-radius: 3px;}

.button1:hover {
  background-color: #85B9EB;
  color: white;
}


* {
  box-sizing: border-box;
}

.row {
  display: flex;
  height: 92%; 
}

.column {
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 10px 10px 10px 10px;
}


#loginForm {
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 10px;
}

#loginForm input { 
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#loginForm button {
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #003366, #45B0DE, #DE3347);
}

#loginForm .signup-link {
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
/* Footer Section */
   .site-footer{ background:#003366; color:#ffffff; padding:14px 12px; text-align: left }
.site-footer .footer-inner{ max-width:1100px; margin:0 auto; display:flex; gap:8px; align-items:flex-start; justify-content:center }
.site-footer .sep{ margin:0 8px; color:rgba(255,255,255,0.5) }
</style>