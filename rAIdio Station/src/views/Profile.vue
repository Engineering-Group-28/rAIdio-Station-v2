<script>
</script>

<template>
    <main>
          <div class="container">
     <p style="margin:0; background-color: #F5F7FA; text-align: center;"><span class="lato-bold" style="font-size: 150%;">Your Profile</span></p><br>
    <div id="profileDisplay">
      <p><strong>Name:</strong> <span id="displayName">Loading...</span></p>
      <p><strong>Student ID:</strong> <span id="displayStudentId">Loading...</span></p>
      <p><strong>Email:</strong> <span id="displayEmail">Loading...</span></p>
      <p><strong>Phone:</strong> <span id="displayPhone">Loading...</span></p>
      <p><strong>Role:</strong> <span id="displayRole">Loading...</span></p>
      <button id="editProfileBtn" class="button">Edit Profile</button>
    </div>
    <p id="formMsg" class="msg"></p>
  </div>

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

    const formMsg = document.getElementById("formMsg");
    const displayName = document.getElementById("displayName");
    const displayStudentId = document.getElementById("displayStudentId");
    const displayEmail = document.getElementById("displayEmail");
    const displayPhone = document.getElementById("displayPhone");
    const displayRole = document.getElementById("displayRole");
    const editProfileBtn = document.getElementById("editProfileBtn");

    // Protect page: redirect if not logged in
    (async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error);
      }

      if (!session) {
        alert("Please log in first.");
        window.location.href = "login.html";
        return;
      }

      const user = session.user;

      // Load profile from DB
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      
      console.log("id:", user.id);

      if (profileError) {
        console.error("Error fetching profile:", profileError); // Log the error
        formMsg.textContent = "Could not load profile.";
        formMsg.className = "msg error";
        return;
      }

      // Display profile data
      displayName.textContent = profile?.name || "N/A";
      displayStudentId.textContent = profile?.student_id || "N/A";
      displayEmail.textContent = user.email || "N/A";
      displayPhone.textContent = profile?.phone || "N/A";
      displayRole.textContent = profile?.role || "N/A";
    })();

    // Redirect to edit profile page
    editProfileBtn.addEventListener("click", () => {
      window.location.href = "edit-profile.html"; // Replace with the actual edit profile page
    });

     const loginLink = document.getElementById("loginLink");
  const logoutBtn = document.getElementById("logoutBtn");
 const profileLink = document.getElementById("profileLink");

  (async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      // User is logged in → show profile + logout
      loginLink.style.display   = "none";
      logoutBtn.style.display   = "inline-block";
      profileLink.style.display = "inline-block";
    } else {
      // Not logged in → only show login
      loginLink.style.display   = "inline-block";
      logoutBtn.style.display   = "none";
      profileLink.style.display = "none";
    }
  })();

  // Logout handler
  logoutBtn.addEventListener("click", async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("role"); // clear demo admin flag if you used it
    window.location.href = "index.html";
  });
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