<script setup>
  import { useAudioPlayerStore } from '@/stores/audioPlayer';
  import { ref } from 'vue';
  import { defineEmits } from 'vue';

  const emit = defineEmits(['button-clicked']);

  const audioPlayer = useAudioPlayerStore();

  const togglePlayPause = (audioSrc) => {
    audioPlayer.togglePlayPause(audioSrc);
    emit('button-clicked');
  };
</script>

<template>
  <main>
    <div class="banner">
    <div class="banner-text">
    <span class="open-sans-header" style="font-size: 50px;">Welcome to the rAIdio</span>
    <p style="font-size: 20px;">Ready to find your next favorite thing?<br>
    Explore our stations bringing you the latest on FAU Engineering.</p>
  </div>
</div>
<div class="container">
  <div class="grid featured">
           <span class="open-sans-header">
            rAIdio Stations
          </span>
       <p style="color: #67686b;">Listen to the latest trending topics from FAU Engineering and more</p>
  </div>
  <div class="grid station1">
    <RouterLink active-class="active" to="/engineeringradio">
        <img src="/engineering_radio.png" class="image">
    </RouterLink>
  </div>
   <div class="grid station2">
       <!-- <button @click="togglePlayPause('/FAUEngineeringRadio.mp3')" class="roundButton">
          {{ audioPlayer.isPlaying && audioPlayer.currentTrack === '/FAUEngineeringRadio.mp3' ? '❚❚' : '▶︎' }}
        </button>

          <button @click="togglePlayPause('/LocalNewsRadio.mp3')" class="roundButton">
          {{ audioPlayer.isPlaying && audioPlayer.currentTrack === '/LocalNewsRadio.mp3' ? '❚❚' : '▶︎' }}
        </button> -->
   </div>
  <div class="grid station3"></div>
  <div class="grid engineeringinfo">
    <RouterLink to="/engineeringradio">
      <span span style="font-weight: 400; font-size: 0.95rem">
        FAU Engineering
      </span>
    </RouterLink>
  </div>
  <div class="grid generalinfo">
    <span span style="font-weight: 400; font-size: 0.95rem">
        FAU General News
    </span>
  </div>
  <div class="grid academicinfo">
    <span span style="font-weight: 400; font-size: 0.95rem">
        FAU Academic and Campus Life
    </span>
  </div>
  <div class="grid station4"></div>
  <div class="grid station5"></div>
  <div class="grid station6"></div>
  <div class="grid ad_section">
    <div class="ad"><img src="/Illustration.png"></div>
    <div class="ad"><img src="/debate_den.png"></div>
    <div class="ad"><img src="/owl_sports.png"></div>
  </div>
  <div class="grid latest">
    <span class="open-sans-header" style="font-size: 1.2rem;">
      Latest News
    </span>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
  </div>
  <!-- <div class="grid share">
    <span class="open-sans-header">
      Share Us
    </span> -->
  <!-- </div> -->
        <div class="grid footer">
          <p style="font-size: 1rem;">
            © 2025 FAU rAIdio Station
          </p>
        </div>
      </div>
      <!--Audio Source-->
    </main>
</template>
  
<!--Vue Sound-->

  <!-- Footer
  <div class="footer">
    <p class="lato-regular"><span style="color: #FFFFFF;">
      &copy; 2025 FAU Engineering rAIdio Station. All rights reserved. |
      </span>
      <a href="privacy.html">Privacy Policy</a></p>
  </div> -->


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

<style scoped>
.banner {
  display: flex;
  background-image: url("/banner.png");
  height: 400px;
  width: auto;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.banner-text {
  color: white;
  margin: 40px;
}

.featured {
   grid-column: 1 / 4;
   grid-row: 1 / 2;
   /* background-color: aqua; */
   padding: 10px 10px 0px 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.station1 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 290px;
  padding: 0;
  background-color: none;
  border-radius: 1.0rem;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station1 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 1.0rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}


.station1 img:hover {
  filter: brightness(70%); /* Becomes slightly transparent on hover */
}

.station2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 290px;
    padding: 15px;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.station3 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  height: 290px;
  /* min-width: 200px; */
  background-color: white;
  background-image:  url("/fau_general_news.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.engineeringinfo {
  display: flex;
  justify-content: center;
   grid-column: 1 / 2;
   grid-row: 3 / 4;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.generalinfo {
   display: flex;
   grid-column: 2 / 3;
   grid-row: 3 / 4;
    justify-content: center;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.academicinfo {
   display: flex;
   grid-column: 3 / 4;
   grid-row: 3 / 4;
   justify-content: center;
   /* background-color: aqua; */
   margin-top: 0;
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}


.station4 {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    height: 290px;
    padding: 15px;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.station5 {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  height: 290px;
  background-color: white;
  background-image:  url("/local_news.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station6 {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  height: 290px;
  background-color: white;
  /* background-image:  url("{{ url_for('static', filename='local_news.png') }}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}


.ad_section {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  background-color: none;
  padding: 0rem 0 0rem 0rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  object-fit: contain;
  row-gap: 1rem;
    /* background-color: dodgerblue; */
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}

.ad {
  width: 100%;
  height: 75px;
  object-fit: contain;
  background-color: none;
}

.ad img{
  width: 100%;
  object-fit: contain;
  border-radius: 1.0rem;
}
  

.latest {
    grid-column: 4 / 5;
    grid-row: 3 / 5;
    min-height: 200px;
    /* padding: 0 1rem 0 1rem;
    background-color: dodgerblue; */
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}

.share {
    grid-column: 4 / 5;
    grid-row: 5 / 6;
    min-height: 200px;
    /* background-color: dodgerblue; */
    padding: 0 1rem 0 1rem;
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}


/* Footer */
.footer {
  grid-column: 1 / 5;
  grid-row: 7 / 8;
  border-top: 2px solid #E0E2E7;
}
</style>