<script setup>
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
        <div class="topbanner">
            <div class="infocontainer">
                <img src="/engineering_radio.png" style="height: 15.0rem; border-radius: 0.5rem; padding-right: 0;"></img>
                <p>
                    <span class="itemspace">
                    <span class="open-sans-header">
                        FAU Research
                    </span><br>
                    Quick updates on research and innovation from Florida Atlantic University<br>
                    Host Alloy takes us through the remarkable research being conducted at FAU.
                </span>
                    <br>
                     <button @click="togglePlayPause('/FAUEngineeringRadio_Combined.mp3')" class="button button1">
                        {{ audioPlayer.isPlaying ? 'Pause' : 'Play Recent' }}
                    </button>
                </p>
            </div>
        </div>
        <div class="container">
            <div class="grid episodes">
                <span class="open-sans-header">
                    Episodes
                </span>
            </div>
            <div class="grid episodescontent">
                <div class="episode"></div>
                <div class="episode"></div>
                <div class="episode"></div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .button {
    background-color: #003366;
    border: none;
    width: 9rem;
    color: white;
    padding: 10px 25px 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 2px;
    cursor: pointer;
    }
    
    .button1 {border-radius: 27px;}

    .button1:hover {
    background-color: #85B9EB;
    color: white;
    }

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

    .episodes {
    display: flex;
    justify-content: left;
    /* flex-wrap: wrap; */
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    /* background-color: aqua; */
    padding: 0px 10px 0rem 10px;
    /* border-bottom: 2px solid #E0E2E7; */
    }

    .episodescontent {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        row-gap: 2rem;
        grid-column: 1 / 4;
        grid-row: 2 / 3;
        /* background-color: aqua; */
        padding: 0px 10px 0rem 10px;
    }

    .episode {
        display: flex;
        background-color: white;
        height: 10rem;
        width: 45rem;
        border-radius: 0.65rem;
        box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    }

</style>