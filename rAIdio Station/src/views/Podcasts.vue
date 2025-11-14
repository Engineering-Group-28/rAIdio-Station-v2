<script setup>
</script>

<template>
    <main>
        <div class="container">
  <div class="grid featured">
           <span class="open-sans-header">
            Featured Podcast
          </span>
       <p>TechDecoded brings you the latest in technology and innovation</p>
  </div>
  <div class="grid podcast1"></div>
   <div class="grid podcast1content">
      <span style="font-weight: 600; font-size: 1.3rem">
        TechDecoded
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
      </p>
    </div>
  <div class="grid podcasts">
           <span class="open-sans-header">
              Podcast Networks
           </span>
       <p>Sports, news, events, and more</p>
  </div>
  <div class="grid podcast2"></div>
  <div class="grid podcast2content">
    <span span style="font-weight: 600; font-size: 1.3rem">
        Debate Den
    </span>
    <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
    </p>
  </div>
  <div class="grid podcast3"></div>
  <div class="grid podcast3content">Owl Sports</div>
  <div class="grid slideshow">Slideshow Placeholder</div>
  <div class="grid latest">
    <span class="open-sans-header">
      Latest News
    </span>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
    <p>Placeholder</p>
  </div>
  <div class="grid footer">
    <p style="font-size: 1rem;">
      © 2025 FAU rAIdio Station
    </p>
  </div>
</div>
    </main>
</template>

<style scoped>
.featured {
   grid-column: 1 / 4;
   grid-row: 1 / 2;
   /* background-color: aqua; */
   padding: 10px 10px 0px 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.podcast1 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  min-height: 180px;
  background-color: white;
  background-image:  url('/fullsize_td.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.podcast1content {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    min-height: 180px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.podcasts {
   grid-column: 1 / 4;
   grid-row: 3 / 4;
   /* background-color: aqua; */
   padding: 10px 10px 0px 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.podcast2 {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  min-height: 180px;
  /* min-width: 200px; */
  background-color: white;
  background-image:  url('/fullsize_dd.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.podcast2content {
    grid-column: 2 / 4;
    grid-row: 4 / 5;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.podcast3 {
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  min-height: 180px;
  background-color: white;
  /* background-image:  url('images/local_news.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; */
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.podcast3content {
    grid-column: 2 / 4;
    grid-row: 5 / 6;
    min-height: 180px;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.slideshow {
  grid-column: 4 / 5;
  grid-row: 1 / 3;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  object-fit: contain;
  row-gap: 1rem;
  border-radius: 5px;
    /* background-color: dodgerblue; */
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}

.latest {
    grid-column: 4 / 5;
    grid-row: 3 / 6;
    min-height: 200px;
    /* box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5); */
}


/* Footer */
.footer {
  grid-column: 1 / 5;
  grid-row: 6 / 7;
  border-top: 2px solid #E0E2E7;
}
</style>