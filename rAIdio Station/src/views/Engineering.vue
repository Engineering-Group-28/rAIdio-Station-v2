<script setup>
  import { useAudioPlayerStore } from '@/stores/audioPlayer';
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  const audioPlayer = useAudioPlayerStore();

  const togglePlayPause = (audioSrc) => {
    audioPlayer.togglePlayPause(audioSrc);

  };
</script>
 // Make this a child component to register within parent Radio.vue
<template>
    <main>
        <div class="topbanner">
            <div class="infocontainer">
                <img src="/engineering_radio.png" style="height: 15.0rem; border-radius: 0.5rem; padding-right: 0;"></img>
                <p>
                    <div class="itemspace">
                    <span class="open-sans-header">
                        FAU Engineering
                    </span><br>
                    Quick updates on research and innovation from Florida Atlantic University<br>
                    Host Alloy takes us through the remarkable research being conducted at FAU.
                    </div>
                    <!-- <br> -->
                     <button @click="togglePlayPause('/FAUEngineeringRadio_Combined.mp3')" class="roundButtonLarge">
                        {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
                    </button>
                </p>
                 <!-- <button @click="togglePlayPause('/FAUEngineeringRadio.mp3')" class="roundButton">
                    {{ audioPlayer.isPlaying ? '❚❚' : '▶︎' }}
                </button> -->
            </div>
        </div>
        <div class="container">
           <div class="grid morestations">
            <span class="open-sans-header">
                More Stations
            </span>
          </div>
          <div class="grid stations">
                <div class="aditem"></div>
                <div class="aditem"></div>
                <div class="aditem"></div>
                <div class="aditem"></div>
            </div>
            <div class="grid xplorepodcasts">
            <span class="open-sans-header">
                Explore Podcasts
            </span>
          </div>
          <div class="grid podcasts">
                <div class="aditem"></div>
                <div class="aditem"></div>
                <div class="aditem"></div>
                <div class="aditem"></div>
          </div>
        </div>
    </main>
</template>

<style scoped>
    .topbanner {
        display: flex;
        padding: 1.5rem 1.5rem 1.5rem 0rem;
        justify-content: flex-start;
        gap: 0.8rem;
        align-items: center;
        background-image: linear-gradient(to bottom,#FF4949, #C9042C);
    }

    .infocontainer {
        max-width: 1400px;
        margin: auto;
        display: grid;
        justify-content: left;
        align-items: center;
        grid-template-columns: 16rem 500fr 300fr;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        gap: 0.8rem;
        grid-column-gap: 0.8rem;
        grid-row-gap: 0.8rem;
        background-color: none;
        color: white;
        /* display: flex;
        justify-content: flex-start;
        align-items: center; */
    }

    .itemspace {
        margin-bottom: 5px;
    }

    .morestations {
    display: flex;
    justify-content: left;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    /* background-color: aqua; */
    padding: 0px 10px 0rem 10px;
    /* border-bottom: 2px solid #E0E2E7; */
    }

    .stations {
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;

    grid-column: 1 / 4;
    grid-row: 2 / 3;
    /* background-color: aqua; */
    padding: 0px 0px 0rem 0px;
    /* border-bottom: 2px solid #E0E2E7; */
    }

    .aditem {
        height: 8rem;
        width: 15rem;
        background-color: grey;
        border-radius: 0.7rem;
    }

    .xplorepodcasts {
    display: flex;
    justify-content: left;
    grid-column: 1 / 4;
    grid-row: 3 / 4;
    margin-top: 1.5rem;
    /* background-color: aqua; */
    padding: 0px 10px 0rem 10px;
    /* border-bottom: 2px solid #E0E2E7; */
    }

    .podcasts {
    display: flex;
    justify-content: flex-start;
    column-gap: 1rem;

    grid-column: 1 / 4;
    grid-row: 4 / 5;
    /* background-color: aqua; */
    padding: 0px 0px 0rem 0px;
    /* border-bottom: 2px solid #E0E2E7; */
    }




</style>