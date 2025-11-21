<script setup>
</script>

<template>
    <main>
  <div class="container">
  <div class="grid featured">
           <span class="open-sans-header">
            Podcast Networks
          </span>
       <p style="color: #67686b;">New episodes covering research, sports, entertainment, and more</p>
  </div>
  <div class="grid podcast1">
    <RouterLink to="/research">
      <img src="/research.png" class="image">
    </RouterLink>
  </div>
  <div class="grid podcast2">
    <RouterLink to="/playmode">
      <img src="/playmode.png" class="image">
    </RouterLink>
  </div>
  <div class="grid podcast3">
    <RouterLink to="/archive9">
      <img src="/archive9.png" class="image"></img>
    </RouterLink>
  </div>
  <div class="grid researchinfo">
    <RouterLink to="/research">
      <span span style="font-weight: 400; font-size: 0.95rem">
          FAU Research
      </span>
    </RouterLink>
  </div>
  <div class="grid pminfo">
    <RouterLink active-class="active" to="/playmode">
      <span span style="font-weight: 400; font-size: 0.95rem">
          PlayMode
      </span>
    </RouterLink>
  </div>
  <div class="grid a9info">
    <RouterLink to="/archive9">
      <span span style="font-weight: 400; font-size: 0.95rem">
          Archive 9
      </span>
    </RouterLink>
  </div>
  <div class="grid podcast4">
    <RouterLink to="/techdecoded">
      <img src="/techdecoded.png" class="image"></img>
    </RouterLink>
  </div>
  <div class="grid podcast5">
    <RouterLink to="/debateden">
      <img src="/debate_den_2.png" class="image"></img>
    </RouterLink>
  </div>
  <div class="grid podcast6">
    <RouterLink to="/friendlyexploits">
      <img src="/friendly_exploits.png" class="image"></img>
    </RouterLink>
  </div>
  <div class="techdecoded">
    <RouterLink to="/techdecoded">
      <span span style="font-weight: 400; font-size: 0.95rem">
          TechDecoded
      </span>
    </RouterLink>
  </div>
    <div class="debateden">
    <RouterLink to="/debateden">
      <span span style="font-weight: 400; font-size: 0.95rem">
          Debate Den
      </span>
    </RouterLink>
  </div>
    <div class="friendlyexploits">
      <RouterLink to="/friendlyexploits">
        <span span style="font-weight: 400; font-size: 0.95rem">
            Friendly Exploits
        </span>
      </RouterLink>
  </div>
  <div class="grid slideshow">Slideshow Placeholder</div>
  <div class="grid latest">
    <span class="open-sans-header">
      Upcoming Events
    </span>
    <p>
      <span style="font-weight: 550; font-size: 1rem">
      Chem Club General Body Meeting
      </span><br>
      Monday, November 17th
    </p><br>
    <p>
    <span style="font-weight: 550; font-size: 1rem">
      TPA Star Meeting
    </span><br>
      Monday, November 17th
    </p><br>
    <p>
      <span style="font-weight: 550; font-size: 1rem">
      Little Bags, Big Smiles
    </span><br>
      Monday, November 17th
    </p>
  </div>
  
</div>
    </main>
     <footer class="site-footer">
      <div class="footer-inner">
        <span>© 2025 FAU Engineering rAIdio Station</span>
        <span class="sep">|</span>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
      </div>
    </footer>
</template>

<style scoped>
.featured {
   grid-column: 1 / 4;
   grid-row: 1 / 2;
   padding: 10px 10px 0px 10px;
}

.podcast1 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 290px;
  padding: 0;
  background-color: none;
  border-radius: 0.7rem;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.container img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.7rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}


.container img:hover {
  filter: brightness(70%);
}

.podcast2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 0.65rem;
}

.podcast3 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 0.7rem;
}

.researchinfo {
  display: flex;
  justify-content: center;
   grid-column: 1 / 2;
   grid-row: 3 / 4;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.pminfo {
   display: flex;
   grid-column: 2 / 3;
   grid-row: 3 / 4;
    justify-content: center;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.a9info {
   display: flex;
   grid-column: 3 / 4;
   grid-row: 3 / 4;
   justify-content: center;
   /* background-color: aqua; */
   margin-top: 0;
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.podcast4 {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 0.65rem;
}

.podcast5 {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius:0.65rem;
}

.podcast6 {
    grid-column: 3 /4;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 0.65rem;
}

.techdecoded {
  display: flex;
  justify-content: center;
   grid-column: 1 / 2;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.debateden {
  display: flex;
  justify-content: center;
   grid-column: 2 / 3;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.friendlyexploits {
  display: flex;
  justify-content: center;
   grid-column: 3 / 4;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}


.slideshow {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  object-fit: contain;
  row-gap: 1rem;
  border-radius: 5px;
    /* background-color: dodgerblue; */
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}

.latest {
    grid-column: 4 / 5;
    grid-row: 3 / 6;
    min-height: 200px;
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}


/* Footer */
.site-footer{ background:#003366; color:#ffffff; padding:14px 12px; text-align: left }
.site-footer .footer-inner{ max-width:1100px; margin:0 auto; display:flex; gap:8px; align-items:flex-start; justify-content:center }
.site-footer .sep{ margin:0 8px; color:rgba(255,255,255,0.5) }
</style>