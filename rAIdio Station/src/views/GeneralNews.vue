<script setup>
  import { useAudioPlayerStore } from '@/stores/audioPlayer';
  import { storeToRefs } from 'pinia';

  const audioPlayer = useAudioPlayerStore();

  const { currentTrack } = storeToRefs(audioPlayer); 

  const togglePlayPause = (audioSrc, audioType, audioName) => {
    audioPlayer.togglePlayPause(audioSrc, audioType, audioName);

const pageUrl = encodeURIComponent(window.location.href);
const pageTitle = encodeURIComponent("🎧 Listen to FAU Engineering rAIdio!");

const facebookShare = `https://facebook.com/sharer/sharer.php?u=${pageUrl}`;
const twitterShare   = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
const linkedinShare  = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;

  };
</script>

 // Make this a child component to register within parent Radio.vue
<template>
    <main>
        <div class="topbanner">
            <div class="infocontainer">
                <img src="/general_news.png" style="height: 15.0rem; border-radius: 0.5rem; padding-right: 0;"></img>
                <p>
                    <span class="itemspace">
                    <span class="open-sans-header">
                        FAU General News
                    </span><br>
                    Quick updates on research and innovation from Florida Atlantic University<br>
                    Host Alloy takes us through the remarkable research being conducted at FAU.
                </span>
                    <br>
                     <button @click="togglePlayPause('/FAUEngineeringRadio_Combined.mp3', 'engineering', 'Engineering News Radio')" class="button button1">
                        {{ audioPlayer.isPlaying && currentTrack == '/FAUEngineeringRadio_Combined.mp3' ? 'Pause' : 'Play' }}
                    </button>
                    <div class="share-buttons">
                        <a :href="facebookShare" target="_blank" class="share-btn fb">Facebook</a>
                        <a :href="twitterShare" target="_blank" class="share-btn tw">Twitter</a>
                        <a :href="linkedinShare" target="_blank" class="share-btn li">LinkedIn</a>
                    </div>
                </p>
            </div>
        </div>
        <div class="container">
           <div class="grid morestations">
            <span class="open-sans-header">
                Upcoming Club Meetings
            </span>
          </div>
          <div class="grid stations">
                <div class="aditem">
                </div>
                <div class="aditem">

                </div>
                <div class="aditem"></div>
                <div class="aditem"></div>
            </div>
            <div class="grid xplorepodcasts">
            <span class="open-sans-header">
                More Stations
            </span>
          </div>
          <div class="grid podcasts">
                <div class="aditem">
                    <RouterLink to="/owlsports">
                        <img src="/owl_sports_banner.png"></img>
                    </RouterLink>
                </div>
                <div class="aditem">
                    <RouterLink to="/engineering">
                        <img src="/engineering_radio_banner.png"></img>
                    </RouterLink>
                </div>
                <div class="aditem"></div>
                <div class="aditem"></div>
          </div>
            <div class="grid footer">
                <p style="font-size: 0.85rem; color: #67686b;">
                    © 2025 FAU rAIdio Station
                </p>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .button {
    background-color: #C6002B;
    border: none;
    width: 6rem;
    color: white;
    padding: 15px 25px 15px 25px;
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
        background: linear-gradient(to top, #002a5c 0%, #005b96 100%);
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
        margin-bottom: 10px;
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
        height: 10rem;
        width: 15rem;
        background-color: grey;
        border-radius: 0.7rem;
    }

    .aditem img{
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

.aditem img:hover {
  filter: brightness(70%); /* Becomes slightly transparent on hover */
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

.footer {
  grid-column: 1 / 5;
  grid-row: 5 / 6;
  border-top: 2px solid #E0E2E7;
}

.share-buttons {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.share-btn {
  padding: 8px 14px;
  border-radius: 18px;
  text-decoration: none;
  font-size: 14px;
  color: white;
}

.fb { background-color: #1877F2; }
.tw { background-color: #1DA1F2; }
.li { background-color: #0A66C2; }

.share-btn:hover {
  opacity: 0.85;
}


</style>