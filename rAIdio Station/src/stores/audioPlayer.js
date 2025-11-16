import { defineStore } from 'pinia';

export const useAudioPlayerStore = defineStore('audioPlayer', {
  state: () => ({
    audio: null, /* Holds the newly created audio object, not the file path! */
    isPlaying: false,
    currentTrack: null, /* Holds the actual file path (a string). */
    isComponentVisible: false /* Audio player is initially hidden */
  }),

  actions: {

    playAudio(audioSrc) {
      if (!this.audio) {
        this.audio = new Audio(audioSrc);
        this.currentTrack = audioSrc;

      } else if (this.audio && this.currentTrack !== audioSrc) {
          this.audio.pause()
          this.audio = new Audio(audioSrc)
          this.currentTrack = audioSrc;
      }
      this.audio.play()
      this.isPlaying = true
    },
    
    pauseAudio(){
        this.audio.pause()
        this.isPlaying = false;
    },

    togglePlayPause(audioSrc) {
      if (this.isPlaying && this.currentTrack === audioSrc) {
        this.pauseAudio()
      } else {
        this.playAudio(audioSrc)
      }
      this.isComponentVisible = true; /* Show component once button for audio is clicked */

    }
  }
})