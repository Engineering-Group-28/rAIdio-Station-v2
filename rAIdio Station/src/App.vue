<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabase"; // make sure you created supabase.js

import { useAudioPlayerStore } from "@/stores/audioPlayer";
import { storeToRefs } from "pinia";

const router = useRouter();
const user = ref(null);

// Audio player store
const audioPlayer = useAudioPlayerStore();
const { currentTrack, currentImage, currentName, currentType, currentTitle } = storeToRefs(audioPlayer);

const togglePlayPause = (audioSrc, audioType, audioName) => {
  audioPlayer.togglePlayPause(audioSrc, audioType, audioName);
};
  const myImage = document.getElementById("audioPlayerImg"); 
  // myImage.src = currentImage;

// Load session
onMounted(async () => {
  const { data } = await supabase.auth.getSession();
  user.value = data?.session?.user || null;

  // reactively update if user logs in/out
  supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null;
  });
});

// Logout
const logout = async () => {
  await supabase.auth.signOut();
  user.value = null;
  router.push("/login");
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
        <li class="nav-item"><RouterLink active-class="active" to="/feedback">Feedback</RouterLink></li>
        <li class="nav-item"><RouterLink active-class="active" to="/about">About</RouterLink></li>

        <!-- Show Login when NOT logged in -->
        <li class="nav-item" v-if="!user">
          <RouterLink active-class="active" to="/login">Login</RouterLink>
        </li>

        <!-- Show Profile + Logout when logged in -->
        <li class="nav-item" v-if="user">
          <RouterLink active-class="active" to="/profile">Profile</RouterLink>
        </li>
        <li class="nav-item" v-if="user">
          <button @click="logout">LOGOUT</button>
        </li>
      </ul>
    </nav>

    <div class="shift">
      <RouterView />
    </div>

    <!-- Audio Player -->
    <div v-if="audioPlayer.isComponentVisible">
      <player class="player">
        <div class="player-item" style="justify-content: left;">
          <img :src=currentImage>
          <div class="text">
          <p style="margin: 0 0 0 1rem; padding: 0;">
            <span style="font-size: 0.8rem; color: #67686b;">
            {{ currentTitle }}
            </span>
            </p>
            <p style="margin: 0 0 0 1rem; padding: 0;">
            <span style="font-size: 0.95rem;">
              {{ currentName }}
            </span>
          </p>
          </div>
        </div>
        <div class="player-item" style="justify-content: center;">
          <button @click="togglePlayPause(currentTrack, currentType, currentName)" class="roundButton">
            {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
          </button>
        </div>
        <div class="player-item"></div>
        <!-- <img src="/local_news.png"></img>
          <button @click="togglePlayPause(currentTrack)" class="roundButton">
            {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
          </button> -->
      </player>
    </div>
  </main>
</template>

<style scoped>
player {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  width: 100%;
  height: 5rem;
  box-shadow: 0px -2px 5px rgba(160,161,161,0.5);
  z-index: 1000;
}

.player-item {
  display: flex;
  margin: 0;
  align-items: center;
  width: 30%;
  height: 100%;
}

.player text {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
  row-gap: 0;
}

.player img {
  height: 100%;
  box-sizing: border-box;
  max-width: auto;
  max-height: 100%;
  width: auto;
  margin-left: 0;
  /* margin-right: 0.5rem; */
}

.player p {
  display: flex;
  text-align: left;
  justify-content: left;
  margin-left: 0.5rem;
}


</style>

