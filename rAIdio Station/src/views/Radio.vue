<script setup>
  import { useAudioPlayerStore } from '@/stores/audioPlayer';
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
    <RouterLink active-class="active" to="/generalnews">
      <img src="/general_news.png" class="image">
    </RouterLink>
   </div>
  <div class="grid station3">
    <RouterLink active-class="active" to="/academicCampusLife">
    <img src="/academic_campus_life.png" class="image">
    </RouterLink>
  </div>
  <div class="grid engineeringinfo">
    <RouterLink to="/engineeringradio">
      <span span style="font-weight: 400; font-size: 0.95rem">
        FAU Engineering
      </span>
    </RouterLink>
  </div>
  <div class="grid generalinfo">
    <RouterLink to="/generalnews">
    <span span style="font-weight: 400; font-size: 0.95rem">
        FAU General News
    </span>
    </RouterLink>
  </div>
  <div class="grid academicinfo">
    <RouterLink to="/academicCampusLife">
    <span span style="font-weight: 400; font-size: 0.95rem">
        FAU Academic and Campus Life
    </span>
    </RouterLink>
  </div>
  <div class="grid station4">
    <img src="/local_news.png" class="image">
  </div>
  <div class="grid station5">
    <img src="/owl_sports_2.png" class="image">
  </div>
  <div class="grid station6">
    <img src="/music.png" class="image">
  </div>
    <div class="grid localnews">
    <span span style="font-weight: 400; font-size: 0.95rem">
        Local News
    </span>
    </div>
      <div class="grid owlsports">
    <span span style="font-weight: 400; font-size: 0.95rem">
        Owl Sports
    </span>
    </div>
    <div class="grid hiphop">
    <span span style="font-weight: 400; font-size: 0.95rem">
        Hip Hop
    </span>
    </div>
  <div class="grid ad_section">
      <div class="ad">
        <RouterLink to="/research">
          <img src="/research_ad.png">
      </RouterLink>
      </div>
    <div class="ad"><img src="/debate_den.png"></div>
    <div class="ad"><img src="/owl_sports.png"></div>
  </div>
  <div class="grid latest">
    <span class="open-sans-header">
      Upcoming Events
    </span>
    <p>
      <span style="font-weight: 550; font-size: 1rem">
      SDT VC's Kitchen Giveback
      </span><br>
      Monday, November 17th
    </p><br>
    <p>
    <span style="font-weight: 550; font-size: 1rem">
      Choices sessions
    </span><br>
      Monday, November 17th
    </p><br>
    <p>
      <span style="font-weight: 550; font-size: 1rem">
      The University Honors Recognition Ceremony
    </span><br>
      Monday, November 17th
    </p>
  </div>
        
      </div>
      <!--Audio Source-->
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

.container img:hover {
  filter: brightness(70%);
}

.station1 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 290px;
  padding: 0;
  background-color: none;
  border-radius: 0.65rem;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station1 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.station2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 290px;
    padding: 0;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 0.65rem;
}

.station2 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.station3 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  height: 290px;
  padding: 0;
  /* min-width: 200px; */
  background-color: white;
  border-radius: 0.65rem;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station3 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
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
    padding: 0;
    vertical-align: middle;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.station4 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.station5 {
  grid-column: 2 / 3;
  grid-row: 4 / 5;
  padding: 0;
  height: 290px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station5 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.station6 {
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  height: 290px;
  padding: 0;
  background-color: white;
  /* background-image:  url("{{ url_for('static', filename='local_news.png') }}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.station6 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}

.localnews {
  display: flex;
  justify-content: center;
   grid-column: 1 / 2;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.owlsports {
  display: flex;
  justify-content: center;
   grid-column: 2 / 3;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.hiphop {
  display: flex;
  justify-content: center;
   grid-column: 3 / 4;
   grid-row: 5 / 6;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
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
  border-radius: 0.65rem;
  transition: filter 0.3s ease-in-out;
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
.site-footer{ background:#003366; color:#ffffff; padding:14px 12px; text-align: left }
.site-footer .footer-inner{ max-width:1100px; margin:0 auto; display:flex; gap:8px; align-items:flex-start; justify-content:center }
.site-footer .sep{ margin:0 8px; color:rgba(255,255,255,0.5) }
</style>