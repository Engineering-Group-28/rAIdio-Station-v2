<script></script>

<template>
    <main>
        <p style="margin:0; background-color: #F5F7FA; text-align: center;"><span class="lato-bold" style="font-size: 150%;">Login</span></p><br>
<form id="loginForm">
  <input type="email" id="email" placeholder="Email" required>
  <input type="password" id="password" placeholder="Password" required>
  <button type="submit">Login</button>
  <button type="button" onclick="loginWithGoogle()">Login with Google</button>
  <div class="signup-link">
    <p>Don't have an account? <a href="signup.html">Sign Up</a></p>
  </div>
</form>
<p id="msg" style="text-align:center;"></p>

 <!-- Footer -->
<div class="footer">
  <p class="lato-regular"><span style="color: #FFFFFF;">
    &copy; 2025 FAU Engineering rAIdio Station. All rights reserved. |
    </span>
    <a href="privacy.html">Privacy Policy</a></p>
</div>

<!-- <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = "https://vefipiufdaxfllfwtavs.supabase.co";
  const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZmlwaXVmZGF4ZmxsZnd0YXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMDAyNTQsImV4cCI6MjA3Mjg3NjI1NH0.evvilDK6acch5X3IKyWZUyiwSUtlWg1s97zOaFUKXCs";

  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      persistSession: true, // Ensure session persistence
    },
  });

  const form = document.getElementById("loginForm");
  const msg = document.getElementById("msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Clear any existing session
    await supabase.auth.signOut();

    // Attempt to log in the user
    const { data: authData, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      msg.textContent = "Login failed: " + error.message;
      msg.style.color = "red";
      return;
    }

    // Force refresh the session to ensure the latest data is used
    const { data: refreshedSession, error: refreshError } = await supabase.auth.getSession();
    if (refreshError) {
      console.error("Error refreshing session:", refreshError);
      msg.textContent = "Login successful, but unable to refresh session.";
      msg.style.color = "orange";
      return;
    }

    const userId = refreshedSession.session.user.id; // Get the latest user ID
    console.log("Refreshed user ID:", userId);

    // Fetch the user's profile to check their role
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId) // Match the logged-in user's ID
      .single();

    if (profileError) {
      console.error("Error fetching user profile:", profileError);
      msg.textContent = "Login successful, but unable to verify user role.";
      msg.style.color = "orange";
      return;
    }

    console.log("User ID:", userId); // Log the user ID
    console.log("Fetched profile:", profile); // Log the entire profile object
    console.log("User role:", profile.role); // Log the role specifically

    // Redirect based on role
    if (profile.role.trim().toLowerCase() === "admin") {
      msg.textContent = "Welcome, Admin! Redirecting…";
      msg.style.color = "green";
      window.location.href = "feedback.html"; // Redirect to the feedback page
    } else {
      msg.textContent = "Login successful! Redirecting…";
      msg.style.color = "green";
      window.location.href = "index.html"; // Redirect to the home page
    }
  });
  async function loginWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://raidio-fau.netlify.app/index.html' // or your landing page
        }
      });

      if (error) {
        console.error("Google login failed:", error.message);
        msg.textContent = "Google login failed: " + error.message;
        msg.style.color = "red";
      }
      // Supabase handles redirect automatically.
    } catch (err) {
      console.error("Unexpected error:", err);
      msg.textContent = "Unexpected error during Google login.";
      msg.style.color = "red";
    }
  }
</script> -->
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
    .footer {
      text-align: center;
      padding: 10px;
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