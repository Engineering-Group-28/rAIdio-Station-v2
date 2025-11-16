<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/lib/supabase";  // <-- make sure this exists

const router = useRouter();

// Reactive variables
const name = ref("Loading...");
const studentId = ref("Loading...");
const email = ref("Loading...");
const phone = ref("Loading...");
const role = ref("Loading...");
const msg = ref("");

// Load profile
onMounted(async () => {
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData?.session;

  if (!session) {
    router.push("/login");
    return;
  }

  const user = session.user;
  email.value = user.email;

  // fetch profile
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error(error);
    msg.value = "Could not load profile.";
    return;
  }

  name.value = profile.name || "N/A";
  studentId.value = profile.student_id || "N/A";
  phone.value = profile.phone || "N/A";
  role.value = profile.role || "N/A";
});

// Go to edit page
const editProfile = () => {
  router.push("/editprofile");
};
</script>

<template>
  <main>
    <div class="container">
      <p style="margin:0; background-color: #F5F7FA; text-align: center;">
        <span class="lato-bold" style="font-size: 150%;">Your Profile</span>
      </p>

      <br />

      <div>
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Student ID:</strong> {{ studentId }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Phone:</strong> {{ phone }}</p>
        <p><strong>Role:</strong> {{ role }}</p>

        <button class="button" @click="editProfile">Edit Profile</button>

        <p class="msg">{{ msg }}</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p class="lato-regular">
        <span style="color: #FFFFFF;">
          &copy; 2025 FAU Engineering rAIdio Station. All rights reserved. |
        </span>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
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
.button1 {border-radius: 32px;}

.button1:hover {
  background-color: #85B9EB;
  color: white;
}


* {
  box-sizing: border-box;
}

.row {
  display: flex;
  background-color: #0073E6;
  height: 100%;
}

.column {
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  margin: 0px;
  padding: 10px 10px 10px 10px;
  height: 100%;
}

/* Footer Section */
.footer {
  text-align: center;
  background: #003366;
  color: white;
      margin-top: auto;
    }

    .footer a {
      color: #85B9EB;
    }

    .footer a:hover {
      color: #CC0000;
}
</style>
