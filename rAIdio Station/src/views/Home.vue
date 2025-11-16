<script setup>
</script>

<template>
    <main>
<div class="row">
  <div class="column">
    <p class="lato-regular" style="margin-left: 15%">
    <span class="lato-bold" style="font-size: 300%; line-height: 1.25;">Welcome to <span style="color: #CC0000;">FAU</span> <span style="color: #003366;">Engineering.</span></span><br>
    <br>
    Powered by AI.<br>
    Whether it's the latest on FAU news, engineering, events (and more), the rAIdio's got you covered.
    Listen to trending topics, browse podcasts, or sign up to stay updated.</p>
    <router-link to="/rAIdio">
      <input type="button" class="button button1 lato-regular" value="Listen Now">
    </router-link>
  </div>
  <div class="column">
    <img class="graphic" src="/homepage_graphic.png" alt="Engineering rAIdio" style="margin-right:15%">
  </div>
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
      font-family: 'Lato', sans-serif;
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
  display: block;
  text-decoration: none;
  color: #292A2B;;
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

/* Home */
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
.button1 {border-radius: 23px;}

.button1:hover {
  background-color: #85B9EB;
  color: white;
}

* {
  box-sizing: border-box;
}

.row {
  display: flex;
  justify-items: center;
  align-items: center;
  flex: 1 0 auto;
  padding: 8em 8rem 8rem 8rem;
  margin: 0;
  background-color: #F5F7FA;
}

.column {
  display: flex;
  flex: 50%;
  flex-direction: column;
  align-items: center;
}
/*Home end*/

/* rAIdio */
.container {
  display: grid;
  background-color: #F5F7FA;
  justify-content: center;
  width: 100%;
  margin-inline: auto;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 100px 300px;
  column-gap: 2.9%;
  height: 50%;
  padding: 1%;
}

.container > div {
  border-radius: 3%;
  padding: 0;
  align-content: center;
  text-align: center;
}

.withbg {
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
  margin-bottom: 0;
}

.adjust {
  margin-bottom: 12%;
  margin-top: 0;
  font-family: sans-serif;
  font-size: 16px;
}
/* rAIdio end*/

/* podcasts */
.threegrid {
  display: grid;
  width: 100%;
  justify-content: center;
  background-color: #F5F7FA;
  margin-inline: auto;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 100px 300px;
  column-gap: 2.9%;
  height: 50%;
  padding: 1%;
}

.twogrid > div {
  border-radius: 3%;
  padding: 0;
  align-content: center;
  text-align: center;
}

.twogrid {
  display: grid;
  width: 100%;
  justify-content: center;
  background-color: #F5F7FA;
  margin-inline: auto;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px 100px;
  column-gap: 2.9%;
  height: 50%;
  padding: 1%;
}

.threegrid > div {
  border-radius: 3%;
  padding: 0;
  align-content: center;
  text-align: center;
}
/* Footer Section */
    .footer {
      text-align: center;
      background: #003366;
      color: white;
      margin-top: 20px;
    }

    .footer a {
      color: #85B9EB;
    }

    .footer a:hover {
      color: #CC0000;
    }
</style>