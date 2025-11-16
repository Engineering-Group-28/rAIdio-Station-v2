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
const { currentTrack } = storeToRefs(audioPlayer);

const togglePlayPause = (audioSrc) => {
  audioPlayer.togglePlayPause(audioSrc);
};

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
        <div class="player-item">
          <button @click="togglePlayPause(currentTrack)" class="roundButton">
            {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
          </button>
          Audio slider
        </div>
      </player>
    </div>
  </main>
</template>

<style scoped>
player {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  box-shadow: 0px -2px 5px rgba(160,161,161,0.5);
  z-index: 1000;
}
</style>

