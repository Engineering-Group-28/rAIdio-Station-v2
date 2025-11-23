import { defineStore } from 'pinia';

// Simulated radio start time: beginning of *today* in the user's local time.
// This makes it feel like the station has been "on" all day.
const RADIO_START_OF_DAY = (() => {
  const now = new Date();
  // year, month, day → midnight today
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
})();

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
    },

    // Radio-mode specific
    isRadioMode: false,                 // true when we're simulating live radio
    radioStartTimestamp: RADIO_START_OF_DAY  // radio "started" at today's midnight
  }),

  actions: {
    // -------- PODCAST MODE (used by Research, or anything non-engineering) --------
    playAudio(audioSrc) {
      // Explicitly exit radio mode when using normal playback
      this.isRadioMode = false;

      if (!this.audio) {
        this.audio = new Audio(audioSrc);
        this.currentTrack = audioSrc;
      } else if (this.audio && this.currentTrack !== audioSrc) {
        this.audio.pause();
        this.audio = new Audio(audioSrc);
        this.currentTrack = audioSrc;
      }

      // Podcast-style: no looping by default
      this.audio.loop = false;
      this.audio.play();
      this.isPlaying = true;
    },
    
    pauseAudio() {
      if (this.audio) {
        this.audio.pause();
      }
      this.isPlaying = false;
    },

    // -------- RADIO MODE (used by Engineering) --------
    startRadioMode(audioSrc) {
      this.isRadioMode = true;

      // Only reset the radio clock if the *radio file itself* changed
      // (e.g., new daily engineering episode). Otherwise, keep the same
      // "started at midnight" timeline.
      if (this.currentTrack !== audioSrc) {
        this.radioStartTimestamp = RADIO_START_OF_DAY;
      }

      // Create or swap the underlying Audio object
      if (!this.audio || this.currentTrack !== audioSrc) {
        if (this.audio) {
          this.audio.pause();
        }
        this.audio = new Audio(audioSrc);
        this.currentTrack = audioSrc;
      }

      // Radio should loop forever
      this.audio.loop = true;

      const syncAndPlay = () => {
        const elapsedSeconds = (Date.now() - this.radioStartTimestamp) / 1000;
        const duration = this.audio.duration || 0;

        if (duration > 0 && Number.isFinite(duration)) {
          // Where would the radio be right now if it started at radioStartTimestamp?
          const position = elapsedSeconds % duration;
          this.audio.currentTime = position;
        }

        this.audio.play();
        this.isPlaying = true;
      };

      // If metadata is already available, sync immediately
      if (this.audio.readyState >= 1 && Number.isFinite(this.audio.duration)) {
        syncAndPlay();
      } else {
        // Otherwise wait for metadata before syncing
        this.audio.onloadedmetadata = () => {
          syncAndPlay();
        };
      }
    },

    // -------- SHARED TOGGLE --------
    togglePlayPause(audioSrc, audioType, audioName) {
      this.currentName = audioName;
      this.currentType = audioType;

      // =======================
      // ENGINEERING → RADIO MODE
      // =======================
      if (audioType === 'engineering') {
        this.currentTitle = 'FAU Engineering';
        this.currentImage = this.images.engineering;
        this.isComponentVisible = true;

        // If engineering radio is already playing this track, pause it
        if (
          this.isPlaying &&
          this.currentTrack === audioSrc &&
          this.isRadioMode
        ) {
          this.pauseAudio();
        } else {
          // Start or resume simulated live radio
          this.startRadioMode(audioSrc);
        }

        return; // don't fall through to podcast logic
      }

      // =====================
      // RESEARCH → PODCAST MODE
      // (and any other non-engineering type)
      // =====================
      if (audioType === 'research') {
        this.currentTitle = 'FAU Research';
        this.currentImage = this.images.research;
      }

      if (this.isPlaying && this.currentTrack === audioSrc && !this.isRadioMode) {
        this.pauseAudio();
      } else {
        this.playAudio(audioSrc);
      }

      this.isComponentVisible = true; /* Show component once button for audio is clicked */
    }
  }
});
