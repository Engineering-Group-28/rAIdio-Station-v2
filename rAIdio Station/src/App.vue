<script setup>
  import {RouterView} from "vue-router"
  import { useAudioPlayerStore } from '@/stores/audioPlayer';
  import { storeToRefs } from 'pinia';

  const audioPlayer = useAudioPlayerStore();
  const { currentTrack } = storeToRefs(audioPlayer); 
    
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
          <li class="nav-item">
            <RouterLink active-class="active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="active" to="/rAIdio">rAIdio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="active" to="/podcasts">Podcasts</RouterLink></li>
          <li class="nav-item"><RouterLink active-class="active" to="/feedback">Feedback</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="active" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink id="loginLink" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink id="profileLink" to="profile.html" style="display:none;">Profile</RouterLink>
          </li>
          <li class="nav-item">
            <button id="logoutBtn" style="display:none;">LOGOUT</button>
          </li>
      </ul>
    </nav>
    <div class="shift">
      <RouterView/>
    </div>
      <div v-if="audioPlayer.isComponentVisible">
        <player class="player">
          <div class="player-item">
            <button @click="togglePlayPause(currentTrack)" class="roundButton">
              {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
            </button>
          </div>
        </player>
      </div>
  </main>
</template>

<style scoped>
/* Audio Player */
player {
  display: flex;
  align-items: center;
  flex-direction: row;
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
