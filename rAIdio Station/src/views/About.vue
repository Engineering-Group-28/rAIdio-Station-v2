<script>
</script>

<template>
    <main>
    <!-- About Section -->
   <p style="margin:0; background-color: #F5F7FA; text-align: center;"><span class="lato-bold" style="font-size: 150%;">About FAU Engineering rAIdio Station</span></p><br>
  <div class="container">
    <h2 class="lato-bold">Our Mission</h2>
    <p class="lato-regular">
      The <strong>FAU Engineering rAIdio Station</strong> is an AI-powered web radio designed to serve the
      Florida Atlantic University Engineering community. Our project combines artificial intelligence,
      web scraping, and generative audio to automatically collect, summarize, and broadcast FAU-related
      news, research, and events through a podcast-style stream.
    </p>

    <h2 class="lato-bold">Why We Created This Project</h2>
    <p class="lato-regular">
      Audio-based platforms like radio and podcasts are a valuable way to share information, entertainment,
      and knowledge — especially when multitasking. However, traditional university news sources can be
      scattered across multiple sites and social feeds. Our goal was to create a centralized, engaging, and
      fully automated solution that informs students and faculty through AI-generated audio segments.
    </p>

    <h2 class="lato-bold">Our Team</h2>
    <div class="team-section">
      <div class="member">
        <h3 class="lato-bold">Emmanuel Mccrimmon</h3>
        <p class="lato-regular"><strong>Role:</strong> Team Leader</p>
        <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
        <p class="lato-regular">Led system architecture and AI text-to-speech pipeline. Responsible for
        project coordination, AI integration, and podcast generation workflow.</p>
      </div>

      <div class="member">
        <h3 class="lato-bold">Julia Souza</h3>
        <p class="lato-regular"><strong>Role:</strong> Front-End Developer</p>
        <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
        <p class="lato-regular">Designed the web interface using React and HTML5 audio components.
        Managed Supabase integration and responsive UI design for playback and streaming.</p>
      </div>

      <div class="member">
        <h3 class="lato-bold">Dominic Wilson</h3>
        <p class="lato-regular"><strong>Role:</strong> System & Data Engineer</p>
        <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
        <p class="lato-regular">Developed the data aggregation subsystem using Puppeteer and Cheerio.
        Created web scrapers for FAU news, weather, and research updates, as well as social sharing features.</p>
      </div>

      <div class="member">
        <h3 class="lato-bold">Peten Nhan</h3>
        <p class="lato-regular"><strong>Role:</strong> Backend & Documentation Engineer</p>
        <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
        <p class="lato-regular">Developed the feedback and admin subsystems, Supabase user management,
        and project documentation. Responsible for the feedback dashboard and profile management modules.</p>
      </div>
    </div>

    <h2 class="lato-bold">Project Advisor & Sponsor</h2>
    <p class="lato-regular"><strong>Faculty Advisor:</strong> Dr. Hanqi Zhuang</p>
    <p class="lato-regular"><strong>Project Sponsor:</strong> Ms. Rabia Shahid</p>
    <p class="lato-regular"><em>FAU Department of Electrical Engineering and Computer Science</em></p>

    <h2 class="lato-bold">Our Vision</h2>
    <p class="lato-regular">
      The FAU rAIdio Station aims to become a scalable, AI-driven media platform that can extend
      beyond FAU, inspiring similar university initiatives to automate academic communication through
      responsible and creative use of artificial intelligence.
    </p>
  </div>

  <!-- Footer -->
  <div class="footer">
    <p class="lato-regular"><span style="color: #FFFFFF;">
      &copy; 2025 FAU Engineering rAIdio Station. All rights reserved. |
      </span>
      <a href="privacy.html">Privacy Policy</a></p>
  </div>
<!-- 
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script>
    const SUPABASE_URL = "https://vefipiufdaxfllfwtavs.supabase.co";
    const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlZmlwaXVmZGF4ZmxsZnd0YXZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMDAyNTQsImV4cCI6MjA3Mjg3NjI1NH0.evvilDK6acch5X3IKyWZUyiwSUtlWg1s97zOaFUKXCs";
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
      auth: {
        persistSession: true,
      },
    });

    const loginLink = document.getElementById("loginLink");
    const logoutBtn = document.getElementById("logoutBtn");
    const profileLink = document.getElementById("profileLink");

    (async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        loginLink.style.display = "none";
        logoutBtn.style.display = "inline-block";
        profileLink.style.display = "inline-block";
      } else {
        loginLink.style.display = "inline-block";
        logoutBtn.style.display = "none";
        profileLink.style.display = "none";
      }
    })();

    logoutBtn.addEventListener("click", async () => {
      await supabase.auth.signOut();
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

    /* Container */
    .container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px;
      background: #bdbbbb;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

  

    /* Team Section */
    .team-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .member {
      background: #f4f4f4;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .member h3 {
      color: #003366;
      margin-bottom: 10px;
    }

    .member p {
      margin: 5px 0;
    }

    /* Footer Section */
    .footer {
      text-align: center;
      background: #003366;
      color: white;
      margin-top: 20px;
      padding: 10px;
    }

    .footer a {
      color: #85B9EB;
    }

    .footer a:hover {
      color: #CC0000;
    }
</style>