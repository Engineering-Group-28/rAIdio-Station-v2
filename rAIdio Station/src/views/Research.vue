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
                    <span class="open-sans-header" style="color: #dbeafe">
                        FAU Research
                    </span><br>
                    Quick updates on research and innovation from Florida Atlantic University<br>
                    Host Alloy takes us through the remarkable research being conducted at FAU.
                </span>
                    <br>
                     <button @click="togglePlayPause('/ResearchScript2_11_16.mp3')" class="button button1">
                        {{ audioPlayer.isPlaying  && currentTrack == '/ResearchScript2_11_16.mp3' ? 'Pause' : 'Play Recent' }}
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
                <div class="episode">
                    <div class="buttonarea">
                     <button @click="togglePlayPause('/ResearchScript2_11_16.mp3')" class="roundButtonSmall">
                        {{ audioPlayer.isPlaying && currentTrack == '/ResearchScript2_11_16.mp3' ? '❚❚' : '▶︎' }}
                    </button>
                    </div>
                    <div class="episodeheader">
                        RISING RESEARCH: Episode 2<br>
                    <span style="font-size: 0.8rem; color: #67686b;">
                        Released November 16th, 2025 • 5 minutes
                    </span><br>
                    <span style="font-size: 0.9rem;">
                        From an “Art of Science” octopus selfie and FAU’s R1 spotlight, to a $1.4 million Everglades prey study and CAROSEL, a new underwater system tracking nutrient-driven water quality — today’s tour of FAU research at work.
                    </span>
                    </div>
                </div>
                <div class="episode">
                    <div class="buttonarea">
                     <button @click="togglePlayPause('/ResearchRecap_11_08_11_15.mp3')" class="roundButtonSmall">
                        {{ audioPlayer.isPlaying && currentTrack == '/ResearchRecap_11_08_11_15.mp3' ? '❚❚' : '▶︎' }}
                     </button>
                    </div>
                    <div class="episodeheader">
                        RESEARCH RECAP: 11/08/2025 - 11/15/2025<br>
                    <span style="font-size: 0.8rem; color: #67686b;">
                        Released November 15th, 2025 • 8 minutes
                    </span><br>
                    <span style="font-size: 0.9rem;">
                        From small-group counseling that boosts sixth graders’ emotional skills, to drone-powered insights on loggerhead sea turtle nesting, quantum vs. classical machine learning for early kidney disease, FAU’s “Art of Science” competition, and Everglades wading bird conservation — this week in FAU research.
                    </span>
                    </div>
                </div>
                <div class="episode">
                    <div class="buttonarea">
                     <button @click="togglePlayPause('/ResearchScript1_11_15.mp3')" class="roundButtonSmall">
                        {{ audioPlayer.isPlaying && currentTrack == '/ResearchScript1_11_15.mp3' ? '❚❚' : '▶︎' }}
                     </button>
                    </div>
                    <div class="episodeheader">
                        RISING RESEARCH: Episode 1<br>
                    <span style="font-size: 0.8rem; color: #67686b;">
                        Released November 15th, 2025 • 5 minutes 30 seconds
                    </span><br>
                    <span style="font-size: 0.9rem;">
                         Small-group counseling for anxious sixth graders, drone-powered insights into loggerhead sea turtle nesting, and quantum vs. classical machine learning for early chronic kidney disease detection — three breakthroughs from FAU researchers in one daily spotlight.
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .button {
    background-color: #C6002B;
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
        padding: 0px 10px 0rem 10px;
    }

    .episode {
        display: grid;
        background-color: white;
        grid-template-columns: 4rem 26rem;
        grid-column-gap: 0;
        row-gap: 0;
        height: 11rem;
        width: 45rem;
        border-radius: 0.65rem;
        box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    }

    .buttonarea {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        grid-column: 1/2;
        grid-row: 1/3;
        padding: 0.8rem 0rem 0rem 0.8rem;
    }

    .episodeheader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 35rem;
        grid-column: 2/5;
        grid-row: 1/2;
        /* max-height: 4rem; */
        padding: 0.8rem 0rem 0rem 0.8rem;
    }
    

</style>