<script setup>
  import {RouterView} from "vue-router"
  import { useAudioPlayerStore } from '@/stores/audioPlayer';

  const audioPlayer = useAudioPlayerStore();
    const togglePlayPause = (audioSrc) => {
    audioPlayer.togglePlayPause(audioSrc);
  };
</script>

<template>

  <main>
    <nav class="navbar">
      <div class="logo">
        <img src="/fau_engineering.png">
      </div>
      <ul class="nav-links">
          <li class="nav-item"><RouterLink active-class="active" to="/">Home</RouterLink></li>
          <li class="nav-item"><RouterLink active-class="active" to="/rAIdio">rAIdio</RouterLink></li>
          <li class="nav-item"><RouterLink active-class="active" to="/podcasts">Podcasts</RouterLink></li>
          <li class="nav-item"><RouterLink active-class="active" to="feedback.html">Feedback</RouterLink></li>
          <li class="nav-item"><RouterLink active-class="active" to="about.html">About</RouterLink></li>
          <li class="nav-item"><RouterLink id="loginLink" to="login.html">Login</RouterLink></li>
          <li class="nav-item"><RouterLink id="profileLink" to="profile.html" style="display:none;">Profile</RouterLink></li>
          <li class="nav-item"><button id="logoutBtn" style="display:none;">LOGOUT</button></li>
      </ul>
    </nav>
    <div class="shift">
      <RouterView/>
    </div>
      <player class="player">
        <div class="player-item">
          <button @click="togglePlayPause('/FAUEngineeringRadio.mp3')" class="roundButton">
            {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
          </button>
        </div>
      </player>
  </main>
</template>

<style scoped>
/* Audio Player */
player {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  /* padding-left: 50px;
  padding-right: 10px; */
  height: 5.0rem;
  box-shadow: 0px -2px 5px rgba(160, 161, 161, 0.5);
  /* border-bottom: 1px solid #adadb1; */
  z-index: 1000;
}

.player-item {
  display: inline-block;
  /* padding: 10px 15px;
  text-decoration: none;
  color: #545455;
  font-weight: 550;
  font-size: 0.9rem; */
}
</style>
