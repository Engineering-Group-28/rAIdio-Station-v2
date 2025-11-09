<script setup>
import {RouterView} from "vue-router"
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
  </main>
</template>

<style scoped>
/* .nav-item a.active {
  text-decoration: underline;
  text-decoration-thickness: 0.2em;
  text-underline-offset: 0.7em;
  color: #003366;
} */


</style>
