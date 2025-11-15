<script>
</script>

<template>
    <main>
    <p style="margin:0; background-color: #F5F7FA; text-align: center;"><span class="lato-bold" style="font-size: 150%;">Feedback</span></p><br>
      
    <!-- Feedback Form -->
     
    <form id="feedbackForm" novalidate>
      
      <fieldset class="form-row">
        <legend>What did you listen to?</legend>
        <div class="checkbox-group" role="group" aria-label="Content listened to">
          <label for="content-news"><input id="content-news" type="checkbox" name="content" value="News"> News</label>
          <label for="content-weather"><input id="content-weather" type="checkbox" name="content" value="Weather"> Weather</label>
          <label for="content-research"><input id="content-research" type="checkbox" name="content" value="Research"> Research</label>
        </div>
      </fieldset>

      <div class="form-row">
        <label for="rating">Rate the podcast (1 to 5 stars):</label>
        <input id="rating" type="number" name="rating" min="1" max="5" required>
        <div class="help">Enter a whole number from 1–5.</div>
      </div>

      <fieldset class="form-row">
        <legend>What could be better?</legend>
        <div class="checkbox-group" role="group" aria-label="Areas for improvement">
          <label for="improvement-audio"><input id="improvement-audio" type="checkbox" name="improvement" value="Audio Quality"> Audio Quality</label>
          <label for="improvement-content"><input id="improvement-content" type="checkbox" name="improvement" value="Content Relevance"> Content Relevance</label>
        </div>
      </fieldset>

      <div class="form-row">
        <label for="comments">Additional Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Tell us more…"></textarea>
      </div>

      <div class="form-row">
        <label for="contact">Optional Contact Info:</label>
        <input id="contact" type="text" name="contact" placeholder="Name/Email (optional)">
      </div>

      <button type="submit">Submit</button>
      <div id="formMsg" aria-live="polite"></div>
    </form>

    <!-- Feedback Table for Admins -->
    <div id="feedbackTable" style="display: none;">
      <h2>Submitted Feedback</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Content</th>
            <th>Rating</th>
            <th>Improvement</th>
            <th>Comments</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>

     <!-- Footer -->
  
<div class="footer">
    <p class="lato-regular"><span style="color: #FFFFFF;">
      &copy; 2025 FAU Engineering rAIdio Station. All rights reserved. |
      </span>
      <a href="privacy.html">Privacy Policy</a></p>
  </div>
<!-- <script>
    // Minimal client-side handling: collect values and show a confirmation.
    const form = document.getElementById('feedbackForm');
    const formMsg = document.getElementById('formMsg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Basic validation for rating
      const ratingEl = form.elements['rating'];
      const ratingVal = parseInt(ratingEl.value, 10);
      if (Number.isNaN(ratingVal) || ratingVal < 1 || ratingVal > 5) {
        formMsg.className = 'error';
        formMsg.textContent = 'Please enter a rating from 1 to 5.';
        ratingEl.focus();
        return;
      }

      // Collect checkbox groups
      const getCheckedValues = (name) =>
        Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map(i => i.value);

      const payload = {
        content: getCheckedValues('content'),
        rating: ratingVal,
        improvement: getCheckedValues('improvement'),
        comments: form.elements['comments'].value.trim(),
        contact: form.elements['contact'].value.trim(),
        submittedAt: new Date().toISOString(),
      };

      try {
      console.log('Payload:', payload);
      // Insert data into Supabase
      const { data, error } = await supabase.from('feedback').insert([payload]);

      if (error) {
        throw error;
      }

      // Show success message
      formMsg.className = 'success';
      formMsg.textContent = 'Thanks! Your feedback has been submitted.';
      console.log('Inserted data:', data);

      // Optional: reset form
      form.reset();
    } catch (err) {
      console.error('Error inserting data:', err);
      formMsg.className = 'error';
      formMsg.textContent = `An error occurred while submitting your feedback. Please try again. ${err.message}`;
    }


    });
   
  </script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script>
    const SUPABASE_URL = "https://vefipiufdaxfllfwtavs.supabase.co";
    const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZmlwaXVmZGF4ZmxsZnd0YXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMDAyNTQsImV4cCI6MjA3Mjg3NjI1NH0.evvilDK6acch5X3IKyWZUyiwSUtlWg1s97zOaFUKXCs";
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: {
    persistSession: true,  
    autoRefreshToken: true
  }
});
await supabase.auth.signOut();

    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackTable = document.getElementById("feedbackTable");
    const feedbackTableBody = feedbackTable.querySelector("tbody");
    

    (async () => {
      // Allow anonymous users to access the feedback form.
      // If there is a logged-in session, check role and show admin table for admins.
      const { data: { session } } = await supabase.auth.getSession();
      console.log("session:", session);
console.log("auth.uid equivalent:", session?.user?.id);
      if (!session) {
        // No session: show the feedback form to anonymous users (no redirect)
        console.log("No session — showing feedback form for anonymous user.");
        feedbackForm.style.display = "block";
        feedbackTable.style.display = "none";
        return;
      }

      const user = session.user;

      // Fetch user role and only show admin view if role === 'admin'
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching user role:", error);
        // Fall back to showing the feedback form if role check fails
        feedbackForm.style.display = "block";
        feedbackTable.style.display = "none";
        return;
      }

      if (!profile || !profile.role) {
        console.warn("Profile missing role — showing feedback form.", profile);
        feedbackForm.style.display = "block";
        feedbackTable.style.display = "none";
        return;
      }

      console.log("Fetched user role:", profile.role);

      if (profile.role.trim().toLowerCase() === "admin") {
        console.log("Admin detected. Showing feedback table.");
        feedbackTable.style.display = "block";
        feedbackForm.style.display = "none";
        
        await loadFeedbackTable();
      } else {
        console.log("User detected. Showing feedback form.");
        feedbackForm.style.display = "block";
        feedbackTable.style.display = "none";
      }
    })();

    async function loadFeedbackTable() {
  const { data, error } = await supabase
    .from("feedback")
    .select("*")
    .order("submittedAt", { ascending: false });

  if (error) {
    console.error("Error loading feedback:", error);
    return;
  }

  console.log("Fetched feedback data:", data); 

  const feedbackTableBody = document.querySelector("#feedbackTable tbody");

  if (!data || data.length === 0) {
    feedbackTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center;">No feedback submissions found.</td>
      </tr>
    `;
    return;
  }

  // Safely render each record
  feedbackTableBody.innerHTML = data.map(fb => {
    // Safely parse array-like strings such as '["Research"]'
    let content = fb.content;
    let improvement = fb.improvement;

    try {
      if (typeof content === "string" && content.startsWith("[")) {
        content = JSON.parse(content);
      }
      if (typeof improvement === "string" && improvement.startsWith("[")) {
        improvement = JSON.parse(improvement);
      }
    } catch (e) {
      console.warn("JSON parse issue:", e);
    }

    // Convert to readable strings
    const contentStr = Array.isArray(content) ? content.join(", ") : content || "";
    const improvementStr = Array.isArray(improvement) ? improvement.join(", ") : improvement || "";

    return `
      <tr>
        <td>${new Date(fb.submittedAt).toLocaleString()}</td>
        <td>${contentStr}</td>
        <td>${fb.rating || ""}</td>
        <td>${improvementStr}</td>
        <td>${fb.comments || ""}</td>
        <td>${fb.contact || ""}</td>
      </tr>
    `;
  }).join("");
}
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
    localStorage.removeItem("role"); 
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

    /* ====== Feedback form styles (merged) ====== */
main { padding: 24px; }
form {
  width: 90%;
  max-width: 600px;
  margin: 24px auto;
  background-color: #ada7a7;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Lexend', sans-serif;
  color: #292A2B;
}
fieldset { border: none; padding: 0; margin: 0 0 16px; }
legend { font-weight: bold; margin-bottom: 8px; }
label { font-weight: bold; display: inline-block; margin: 8px 0 6px; }
.form-row { margin-bottom: 14px; }

input[type="text"],
input[type="number"],
textarea {
  width: 95%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 8px 16px;
  margin-top: 6px;
}

    button[type="submit"] {
  background-color: #005499;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
}
button[type="submit"]:hover { filter: brightness(1.05); }
.help { font-size: 12px; opacity: 0.8; }
.success { color: #0a7a2f; margin-top: 10px; font-weight: 600; }
.error { color: #b00020; margin-top: 10px; }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    table th {
      background-color: #003366;
      color: white;
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
      background: #003366;
      color: white;
      margin-top: auto;
      padding: 10px;
    }

    .footer a {
      color: #85B9EB;
    }

    .footer a:hover {
      color: #CC0000;
    }
</style>