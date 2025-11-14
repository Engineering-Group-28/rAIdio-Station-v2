export const useAudioStore = defineStore('audio', {
  state: () => ({
    // You might want to store the audio element or its URL here
    player: null,
    isPlaying: false
  }),
  actions: {
    play(url) {
      // If there is a currently playing audio, pause it first (optional)
      if (this.player) {
        this.player.pause();
      }

      // Create a new audio element and set its source
      const audioElement = new Audio(url);
      this.player = audioElement;
      
      // Play the audio
      this.player.play();
      this.isPlaying = true;
    },
    pause() {
      if (this.player) {
        this.player.pause();
        this.isPlaying = false;
      }
    },
    stop() {
      if (this.player) {
        this.player.pause();
        this.player.currentTime = 0; // Reset playback to the beginning
        this.isPlaying = false;
      }
    }
  }
});