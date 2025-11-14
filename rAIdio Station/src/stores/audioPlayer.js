import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useAudioPlayerStore = defineStore('audioPlayer', {
  state: () => ({
    audio: null,
    isPlaying: false
  }),

  actions: {

    playAudio(audioSrc) {
      if (!this.audio) {
        this.audio = new Audio(audioSrc)
      }
      this.audio.play()
      this.isPlaying = true
    },
    
    pauseAudio(){
        this.audio.pause()
        this.isPlaying = false;
    },

    togglePlayPause(audioSrc) {
      if (this.isPlaying && this.audio) {
        this.pauseAudio()
      } else {
        this.playAudio(audioSrc)
      }

    }
  }
})