import { defineStore } from 'pinia';

export const useAudioPlayerStore = defineStore('audioPlayer', {
  state: () => ({
    audio: null, /* Holds the newly created audio object, not the file path! */
    isPlaying: false,
    audioName: null,
    currentTrack: null,  /* Holds the actual file path (a string). */
    currentTitle: null,
    currentName: null,
    currentType: null,
    currentImage: null,
    // audioType: null,
    isComponentVisible: false,  /* Audio player is initially hidden */
    images: {
      engineering: '/engineering_radio.png',
      research: '/research.png'
    }
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

    togglePlayPause(audioSrc, audioType, audioName) {
      if (this.isPlaying && this.currentTrack === audioSrc) {
        this.pauseAudio()
      } else {
        this.playAudio(audioSrc)
      }
      this.currentName = audioName;
      this.currentType = audioType;
      if (audioType === 'engineering') {
        this.currentTitle = 'FAU Engineering'
        this.currentImage = this.images.engineering;
      } else if (audioType === 'research')
        {
          this.currentTitle = 'FAU Research'
          this.currentImage = this.images.research;
        }
      this.isComponentVisible = true; /* Show component once button for audio is clicked */

    }
  }
})