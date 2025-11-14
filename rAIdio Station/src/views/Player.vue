<template>
    <main>
        <player class="player">
          <div class="player-item">
            <button @click="togglePlayPause('/FAUEngineeringRadio.mp3')" class="roundButton">
              {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
            </button>
          </div>
        </player>
    </main>
</template>

<script setup>
</script>

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