<script setup>
</script>

<template>
    <main>
        <div class="container">
  <div class="grid featured">
           <span class="open-sans-header">
            Podcast Networks
          </span>
       <p style="color: #67686b;">New episodes covering research, sports, entertainment, and more</p>
  </div>
  <div class="grid podcast1">
    <RouterLink active-class="active" to="/research">
        <img src="/engineering_radio.png" class="image">
    </RouterLink>
  </div>
  <div class="grid podcast2"></div>
  <div class="grid podcast3"></div>
  <div class="grid researchinfo">
    <span span style="font-weight: 400; font-size: 0.95rem">
        FAU Research
    </span>
  </div>
  <div class="grid pminfo">
    <span span style="font-weight: 400; font-size: 0.95rem">
        PlayMode
    </span>
  </div>
  <div class="grid a9info">
    <span span style="font-weight: 400; font-size: 0.95rem">
        Archive 9
    </span>
  </div>
  <div class="grid podcast4"></div>
  <div class="grid podcast5"></div>
  <div class="grid podcast6"></div>
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
  height: 290px;
  padding: 0;
  background-color: none;
  border-radius: 0.7rem;
  box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
}

.podcast1 img{
  /* width: 99%;
  object-fit: contain;*/
  border-radius: 0.7rem;
  transition: filter 0.3s ease-in-out;
  height: 100%;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
}


.podcast1 img:hover {
  filter: brightness(70%); /* Becomes slightly transparent on hover */
}

.podcast2 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.podcast3 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.researchinfo {
  display: flex;
  justify-content: center;
   grid-column: 1 / 2;
   grid-row: 3 / 4;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.pminfo {
   display: flex;
   grid-column: 2 / 3;
   grid-row: 3 / 4;
    justify-content: center;
   /* background-color: aqua; */
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.a9info {
   display: flex;
   grid-column: 3 / 4;
   grid-row: 3 / 4;
   justify-content: center;
   /* background-color: aqua; */
   margin-top: 0;
   padding: 0px 10px 3rem 10px;
  /* border-bottom: 2px solid #E0E2E7; */
}

.podcast4 {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.podcast5 {
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
    background-color: #ffffff;
    box-shadow: 0px 0px 5px 0.5px rgba(160, 161, 161, 0.5);
    border-radius: 5px;
}

.podcast6 {
    grid-column: 3 /4;
    grid-row: 4 / 5;
    height: 290px;
    padding: 0;
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