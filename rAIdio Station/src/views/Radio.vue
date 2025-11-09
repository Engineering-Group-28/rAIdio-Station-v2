<script setup>
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
            Featured Station
          </span>
       <p>Listen to the latest trending topics from FAU Engineering</p>
  </div>
  <div class="grid station1"></div>
   <div class="grid station1content">
      <span style="font-weight: 600; font-size: 1.3rem">
        FAU Engineering
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
      </p>
    </div>
  <div class="grid stations">
           <span class="open-sans-header">
              rAIdio Stations
           </span>
       <p>Listen to the latest trending topics from FAU</p>
  </div>
  <div class="grid station2"></div>
  <div class="grid station2content"><p>Content</p></div>
  <div class="grid station3"></div>
  <div class="grid station3content">Content</div>
  <div class="grid station4"></div>
  <div class="grid station4content">Music</div>
  <div class="grid ad_section">
    <div class="ad"><img src="/Illustration.png"></div>
    <div class="ad"><img src="/debate_den.png"></div>
    <div class="ad"><img src="/owl_sports.png"></div>
  </div>
  <div class="grid latest">
    <span class="open-sans-header">
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
  
  
  
  
  
  
  
  
  
  <!-- Audio -->
  <!-- <audio id="firstAudio" src="audio/FAUEngineeringRadio.mp3" preload="auto"></audio>
  <audio id="secondAudio" src="audio/GeneralFAUNewsRadio.mp3" preload="auto"></audio>
  <audio id="thirdAudio" src="audio/LocalNewsRadio.mp3" preload="auto"></audio> -->

  <!-- Play/pause button functionality -->
  <!-- <script>
  const firstAudio = document.getElementById('firstAudio');
  const playButtonOne = document.getElementById('playbutton1');

  let isPlayingOne = false;
  playButtonOne.innerHTML = '▶';

    playButtonOne.addEventListener('click', function() {
        if (isPlayingOne) {
            firstAudio.pause();
            playButtonOne.innerHTML = '▶';
            playButtonOne.classList.remove('paused');
        } else {
            firstAudio.play();
            playButtonOne.innerHTML = '❚❚';
            playButtonOne.classList.add('paused');
        }
        isPlayingOne = !isPlayingOne;
    });
    </script>

<script>
    const secondAudio = document.getElementById('secondAudio');
    const playButtonTwo = document.getElementById('playbutton2');
     
    let isPlayingTwo = false;
    playButtonTwo.innerHTML = '▶';

    playButtonTwo.addEventListener('click', function() {
        if (isPlayingTwo) {
            secondAudio.pause();
            playButtonTwo.innerHTML = "▶";
            playButtonTwo.classList.remove('paused');
        } else {
            secondAudio.play();
            playButtonTwo.innerHTML = "❚❚";
            playButtonTwo.classList.add('paused');
        }
        isPlayingTwo = !isPlayingTwo;
    });
</script>
<script>
    const thirdAudio = document.getElementById('thirdAudio');
    const playButtonThree = document.getElementById('playbutton3');
  
    let isPlayingThree = false;
    playButtonThree.innerHTML = '▶';
        
        playButtonThree.addEventListener('click', function() {
        if (isPlayingThree) {
            thirdAudio.pause();
            playButtonThree.innerHTML = "▶";
            playButtonThree.classList.remove('paused');
        } else {
            thirdAudio.play();
            playButtonThree.innerHTML = "❚❚";
            playButtonThree.classList.add('paused');
        }
        isPlayingThree = !isPlayingThree;
    });
  </script>







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
    </main>
</template>

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

/* The grid for the page content */
.container {
  max-width: 1000px;
  margin: 35px auto;
  padding: 0px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
  background-color: none;
}

.grid {
  background-color: none;
  color: #212123;
  padding: 25px;
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
  height: 180px;
  background-color: white;
  background-image:  url("/fau_engineering_withbg.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station1content {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    height: 180px;
    padding: 15px;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.stations {
   grid-column: 1 / 4;
   grid-row: 3 / 4;
   /* background-color: aqua; */
   padding: 10px 10px 0px 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.station2 {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  height: 180px;
  /* min-width: 200px; */
  background-color: white;
  background-image:  url("/fau_general_news.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station2content {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    padding: 15px;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.station3 {
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  height: 180px;
  background-color: white;
  background-image:  url("/local_news.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station3content {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
    padding: 15px;
    vertical-align: middle;
    height: 180px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.station4 {
  grid-column: 1 / 2;
  grid-row: 6 / 7;
  height: 180px;
  background-color: white;
  /* background-image:  url("{{ url_for('static', filename='local_news.png') }}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station4content {
    grid-column: 2 / 4;
    grid-row: 6 / 7;
    padding: 15px;
    vertical-align: middle;
    height: 180px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.ad_section {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  background-color: none;
  padding: 1rem 0 1rem 0rem;
  display: flex;
  flex-wrap: wrap;
  object-fit: contain;
  row-gap: 1rem;
  border-radius: 5px;
    /* background-color: dodgerblue; */
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}

.ad {
  width: 100%;
  height: 85px;
  object-fit: contain;
  border-radius: 5px;
  background-color: none;
}

.ad img{
  width: 100%;
  object-fit: contain;
  border-radius: 5px;
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