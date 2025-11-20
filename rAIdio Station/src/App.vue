<script setup>
import { RouterView, RouterLink, useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
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

const displayName = computed(() => {
  if (!user.value) return ''
  // prefer full name in user metadata, fall back to email
  return user.value.user_metadata?.full_name || user.value.email || user.value.id || ''
})
</script>

<template>
  <main>
    <nav class="navbar">
      <div class="nav-left">
        <div class="logo">
          <img src="/fau_engineering.png" alt="FAU Engineering">
        </div>
      </div>

      <ul class="nav-links">
        <li class="nav-item"><RouterLink active-class="active" to="/">Home</RouterLink></li>
        <li class="nav-item"><RouterLink active-class="active" to="/rAIdio">rAIdio</RouterLink></li>
        <li class="nav-item"><RouterLink active-class="active" to="/podcasts">Podcasts</RouterLink></li>
        <li class="nav-item"><RouterLink active-class="active" to="/feedback">Feedback</RouterLink></li>
        <li class="nav-item"><RouterLink active-class="active" to="/about">About</RouterLink></li>
      </ul>

      <div class="nav-actions">
        <span class="username" v-if="user">{{ displayName }}</span>

        <!-- when not logged in, show Login link -->
        <RouterLink class="login-link" v-if="!user" active-class="active" to="/login">Login</RouterLink>

        <!-- Profile + Logout when logged in -->
        <RouterLink v-if="user" class="profile-link" active-class="active" to="/profile">Profile</RouterLink>
        <button v-if="user" class="logout-button" @click="logout">Logout</button>
      </div>
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

.navbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:10px 18px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  position:sticky;
  top:0;
  z-index:900;
}
.logo img{ height:42px }
.nav-links{ display:flex; gap:14px; list-style:none; padding:0; margin:0; align-items:center }
.nav-links .nav-item a{ color:#0b2540; text-decoration:none; padding:6px 8px }
.nav-links .nav-item a.active{ font-weight:700; border-bottom:2px solid #005b96 }
.nav-actions{ display:flex; gap:12px; align-items:center }
.username{ color:#0b2540; font-weight:600; margin-right:6px }
.profile-link, .login-link{ color:#0b2540; text-decoration:none; padding:6px 10px }
.logout-button{ background:#e53e3e; color:white; border:0; padding:8px 12px; border-radius:6px; cursor:pointer }
.logout-button:hover{ opacity:0.95 }

@media (max-width:700px){
  .nav-links{ display:none }
}

.shift{ margin:0; padding:0 }
</style>

