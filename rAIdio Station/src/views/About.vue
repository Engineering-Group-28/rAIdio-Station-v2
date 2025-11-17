<script setup>
const team = [
  { id: 0, initials: 'EM', name: 'Emmanuel Mccrimmon', role: 'Team Leader — Computer Science', bio: 'Led system architecture, AI TTS pipeline, and project coordination.' },
  { id: 1, initials: 'JS', name: 'Julia Souza', role: 'Front-End Developer — Computer Science', bio: 'Website visual design and graphic artist. Built web application functionality and structure with Vue.js. Implemented global audio state logic and management.' },
  { id: 2, initials: 'DW', name: 'Dominic Wilson', role: 'System & Data Engineer — Computer Science', bio: 'Built web scrapers and data aggregation pipelines for automated content.' },
  { id: 3, initials: 'PN', name: 'Peten Nhan', role: 'Backend & Documentation Engineer — Computer Science', bio: 'Implemented Supabase user flows, feedback dashboard, and documentation.' }
]
</script>

<template>
  <main class="about-page">
    <header class="hero">
      <div class="hero-inner">
        <h1>About FAU Engineering rAIdio Station</h1>
        <p class="tagline">AI-powered radio that curates FAU engineering news, research, and events</p>
      </div>
    </header>

    <section class="container content">
      <div class="main-box">
        <div class="stacked">
          <div>
            <h2 class="section-title">Our Mission</h2>
            <p class="body">
              The <strong>FAU Engineering rAIdio Station</strong> is an AI-powered web radio designed to serve
              the Florida Atlantic University Engineering community. We combine AI, automated scraping, and
              generative audio to collect, summarize, and broadcast FAU-related news and research in an
              accessible podcast-style stream.
            </p>

            <h2 class="section-title">Why We Built It</h2>
            <p class="body">
              Podcasts and radio are ideal for busy students and faculty. Our aim is to centralize scattered
              information into an engaging, automated audio feed that keeps the FAU engineering community
              informed and connected.
            </p>
          </div>

          <div class="vision-card">
            <h3 class="section-title">Our Vision</h3>
            <p class="body">
              Scale rAIdio Station into a university-wide AI media platform that automates academic
              communication and inspires similar initiatives nationwide.
            </p>
            <div class="meta">
              <p><strong>Faculty Advisor:</strong> Dr. Hanqi Zhuang</p>
              <p><strong>Project Sponsor:</strong> Ms. Rabia Shahid</p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="section-title">Our Team</h2>
          <div class="team-row" role="list">
            <div v-for="member in team" :key="member.id" class="member-card" role="listitem">
              <div class="avatar">{{ member.initials }}</div>
              <h3>{{ member.name }}</h3>
              <p class="role"><strong>{{ member.role }}</strong></p>
              <p class="body">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <footer class="site-footer">
      <div class="footer-inner">
        <span>© 2025 FAU Engineering rAIdio Station</span>
        <span class="sep">|</span>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </div>
    </footer>
    
  </main>
</template>

<style scoped>
:root{
  --bg:#f7fafc;
  --card:#ffffff;
  --muted:#6b7280;
  --accent:#005b96;
}

.about-page{
  font-family: 'Lato', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  background: linear-gradient(180deg,var(--bg) 0%, #eef2f6 100%);
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.hero{
  background: linear-gradient(90deg, #002a5c 0%, #005b96 100%);
  color: white;
  padding: 48px 12px;
  text-align: center;
}
.hero-inner{ max-width:1100px; margin:0 auto; }
.hero h1{ margin: 0; font-size: 34px; letter-spacing: -0.5px; }
.tagline{ margin-top:8px; color: #dbeafe; font-size:16px }

.container{ max-width:1100px; margin: -32px auto 40px; padding: 28px; background: transparent; }
.content{ padding-top:8px; flex:1 }

.two-col{ display:grid; grid-template-columns: 1fr 360px; gap: 24px; align-items:start; }
@media (max-width:900px){ .two-col{ grid-template-columns: 1fr; } }

.section-title{ color:var(--accent); margin: 8px 0 10px; font-weight:700; }
.center{ text-align:center }

.body{ color:var(--muted); line-height:1.6; font-size:16px }

.vision-card{ background:var(--card); padding:18px; border-radius:10px; box-shadow:0 6px 18px rgba(2,6,23,0.08); }
.vision-card .meta{ margin-top:14px; color:var(--muted); font-size:14px }

.team-section{ display:grid; grid-template-columns: repeat(4,1fr); gap:18px; margin-top:18px; }
@media (max-width:1100px){ .team-section{ grid-template-columns: repeat(2,1fr); } }
@media (max-width:600px){ .team-section{ grid-template-columns: 1fr; } }

.main-box{ background:var(--card); padding:22px; border-radius:12px; box-shadow:0 10px 30px rgba(2,6,23,0.06) }
.stacked{ display:flex; flex-direction:column; gap:18px }
.vision-card{ background:transparent; padding:0; box-shadow:none }

.team-row{ display:flex; gap:16px; margin-top:12px; overflow:auto; padding-bottom:6px }
.member-card{ flex:0 0 260px; background:var(--card); padding:18px; border-radius:10px; box-shadow:0 8px 24px rgba(2,6,23,0.06); text-align:center }
.member-card .avatar{ width:72px; height:72px; margin: 0 auto 12px; font-size:18px }
.member-card h3{ margin:6px 0 6px }
.member-card .body{ color:var(--muted); }

@media (max-width:800px){ .member-card{ flex:0 0 220px } }
@media (max-width:520px){ .team-row{ gap:12px } .member-card{ flex:0 0 200px } }

.member{ background:var(--card); padding:18px; border-radius:10px; box-shadow:0 6px 18px rgba(2,6,23,0.06); text-align:center }
.avatar{ width:64px; height:64px; margin: 0 auto 10px; border-radius:50%; background:linear-gradient(135deg,#0066cc,#00aaff); display:flex; align-items:center; justify-content:center; color:white; font-weight:700 }
.member h3{ margin:6px 0 4px; font-size:18px }
.role{ color:var(--accent); font-size:14px; margin-bottom:8px }
.small-note{ color:var(--muted); margin-top:22px }

.site-footer{ background:#003366; color:#ffffff; padding:14px 12px; text-align: left }
.site-footer .footer-inner{ max-width:1100px; margin:0 auto; display:flex; gap:8px; align-items:flex-start; justify-content:center }
.site-footer .sep{ margin:0 8px; color:rgba(255,255,255,0.5) }

</style>
