<script>
</script>

<template>
    <main>
          <p style="margin:0; background-color: #F5F7FA; text-align: center;"><span class="lato-bold" style="font-size: 150%;">Update Profile</span></p><br>
  <div class="container">
    <form id="UpdateForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required>

      <label for="studentId">Student ID:</label>
      <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required>

      <label for="phone">Phone Number:</label>
      <input type="text" id="phone" name="phone" placeholder="Enter your phone number">

      <button type="submit">Update</button>
      <div id="formMsg" aria-live="polite"></div>
    </form>
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

  const form = document.getElementById('UpdateForm');
  const formMsg = document.getElementById('formMsg');

  // Prefill the form with the user's current profile data
  (async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert("Please log in first.");
      window.location.href = "login.html";
      return;
    }

    const user = session.user;

    // Fetch the user's profile
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      formMsg.textContent = "Could not load profile.";
      formMsg.className = "error";
      return;
    }

    // Prefill the form fields
    document.getElementById("name").value = profile.name || "";
    document.getElementById("studentId").value = profile.student_id || "";
    document.getElementById("email").value = profile.email || "";
    document.getElementById("phone").value = profile.phone || "";
  })();

  // Handle form submission to update the profile
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const studentId = form.elements['studentId'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();

    const { data: { session } } = await supabase.auth.getSession();
    const user = session.user;

    try {
      // Check if the new email already exists in the profiles table
      const { data: existingProfile, error: profileCheckError } = await supabase
        .from("profiles")
        .select("id, email")
        .eq("email", email)
        .maybeSingle(); // Use maybeSingle() to avoid errors when no rows are found

      if (profileCheckError) {
        console.error("Error checking email in profiles table:", profileCheckError);
        formMsg.className = "error";
        formMsg.textContent = "An error occurred while checking the email. Please try again.";
        return;
      }

      if (existingProfile && existingProfile.id !== user.id) {
        // If the email already exists and belongs to another user, show an error
        formMsg.className = "error";
        formMsg.textContent = "This email is already registered. Please use a different email.";
        return;
      }

      // Update the user's profile
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          name,
          student_id: studentId,
          email,
          phone,
        })
        .eq("id", user.id);

      if (updateError) {
        console.error("Error updating profile:", updateError);
        formMsg.textContent = "Failed to update profile.";
        formMsg.className = "error";
        return;
      }

      formMsg.textContent = "Profile updated successfully!";
      formMsg.className = "success";
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 2000);
    } catch (err) {
      console.error("Unexpected Error:", err);
      formMsg.className = "error";
      formMsg.textContent = "Unexpected error. See console for details.";
    }
  });

  const loginLink = document.getElementById("loginLink");
  const logoutBtn = document.getElementById("logoutBtn");
  const profileLink = document.getElementById("profileLink");

  (async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      // User is logged in → show profile + logout
      loginLink.style.display = "none";
      logoutBtn.style.display = "inline-block";
      profileLink.style.display = "inline-block";
    } else {
      // Not logged in → only show login
      loginLink.style.display = "inline-block";
      logoutBtn.style.display = "none";
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
    .container {
      max-width: 600px;
      margin: 50px auto;
      background: #8f8b8b;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      text-align: center;
      color: #292A2B;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 600px;
    }

    label {
      font-weight: bold;
    }

    input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #003366;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #45B0DE;
    }

    .success {
      color: #0a7a2f;
      margin-top: 10px;
      font-weight: 600;
    }

    .error {
      color: #b00020;
      margin-top: 10px;
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