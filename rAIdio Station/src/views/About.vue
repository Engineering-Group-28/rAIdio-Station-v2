<script setup>
</script>

<template>
  <main>
    <!-- Title -->
    <p style="margin:0; background-color: #F5F7FA; text-align: center;">
      <span class="lato-bold" style="font-size: 150%;">About FAU Engineering rAIdio Station</span>
    </p>
    <br>

    <div class="container">
      <!-- Mission -->
      <h2 class="lato-bold">Our Mission</h2>
      <p class="lato-regular">
        The <strong>FAU Engineering rAIdio Station</strong> is an AI-powered web radio designed to serve
        the Florida Atlantic University Engineering community. Our project combines artificial intelligence,
        web scraping, and generative audio to automatically collect, summarize, and broadcast FAU-related
        news, research, and events through a podcast-style stream.
      </p>

      <!-- Why We Created This -->
      <h2 class="lato-bold">Why We Created This Project</h2>
      <p class="lato-regular">
        Audio-based platforms like radio and podcasts are a valuable way to share information — especially
        while multitasking. But university news sources can be scattered. Our goal is to build a centralized,
        engaging, fully automated solution that informs students and faculty through AI-generated audio.
      </p>

      <!-- Team -->
      <h2 class="lato-bold">Our Team</h2>
      <div class="team-section">
        <div class="member">
          <h3 class="lato-bold">Emmanuel Mccrimmon</h3>
          <p class="lato-regular"><strong>Role:</strong> Team Leader</p>
          <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
          <p class="lato-regular">
            Led system architecture and AI text-to-speech pipeline. Managed AI integration, project coordination,
            and podcast generation workflow.
          </p>
        </div>

        <div class="member">
          <h3 class="lato-bold">Julia Souza</h3>
          <p class="lato-regular"><strong>Role:</strong> Front-End Developer</p>
          <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
          <p class="lato-regular">
            Designed the web interface and audio playback UI. Oversaw Supabase integration and responsive site
            design for mobile and desktop.
          </p>
        </div>

        <div class="member">
          <h3 class="lato-bold">Dominic Wilson</h3>
          <p class="lato-regular"><strong>Role:</strong> System & Data Engineer</p>
          <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
          <p class="lato-regular">
            Built the data aggregation subsystem using Puppeteer and Cheerio. Developed web scrapers for FAU
            news, research, and weather, and assisted with social sharing tools.
          </p>
        </div>

        <div class="member">
          <h3 class="lato-bold">Peten Nhan</h3>
          <p class="lato-regular"><strong>Role:</strong> Backend & Documentation Engineer</p>
          <p class="lato-regular"><strong>Major:</strong> Computer Science</p>
          <p class="lato-regular">
            Developed feedback & admin subsystems, Supabase user management, and documentation. Built the
            feedback dashboard and profile system.
          </p>
        </div>
      </div>

      <!-- Advisor -->
      <h2 class="lato-bold">Project Advisor & Sponsor</h2>
      <p class="lato-regular"><strong>Faculty Advisor:</strong> Dr. Hanqi Zhuang</p>
      <p class="lato-regular"><strong>Project Sponsor:</strong> Ms. Rabia Shahid</p>
      <p class="lato-regular"><em>FAU Department of Electrical Engineering & Computer Science</em></p>

      <!-- Vision -->
      <h2 class="lato-bold">Our Vision</h2>
      <p class="lato-regular">
        Our long-term vision is to scale the rAIdio Station into a university-wide AI media platform that
        automates academic communication and inspires similar initiatives nationwide.
      </p>
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
.lato-regular {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.lato-bold {
  font-family: "Lato", sans-serif;
  font-weight: 700;
}

.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #bdbbbb;
  border-radius: 10px;
}

.team-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.member {
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.footer {
  text-align: center;
  background: #003366;
  color: white;
  padding: 10px;
}
</style>
