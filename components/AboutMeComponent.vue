<template>
  <v-row class="about-me">
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <span style="position: absolute" class="circles-left">
            <span class="position: relative">
          <div class="circle-1"/>
          <div class="circle-2"/>
        </span>
      </span>
      <div class="pb-15">
        <v-img
        max-height="400"
        max-width="400"
        :src="require('../../portfolio-new/static/headshot.jpg')"
        class="headshot-img animate__animated animate__fadeInLeft"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
         <div class="pb-15 animate__animated animate__fadeInRight">
          <h1 class="text-center pb-7">Welcome</h1>
        <p class="pb-3">
          Hi there, I’m Hans Accola, a full-stack software developer. Nice to meet you! I’m originally from Norway but moved to Minnesota when
          I was a child and have lived here ever since. Here are a few of my favorite things to do outside of coding:
        </p>
        <ul class="mb-7">
          <li>Going on hikes with my wife, Marie.</li>
          <li>Playing basketball and working out at the gym.</li>
          <li>Bringing my 95lb black lab to the dog park.</li>
          <li>Taking typing speed tests on 10fastfingers.com, max so far is 150+ WPM.</li>
        </ul>
        <p>
          My professional experience started in 2017 as an inside medical sales rep. After that I worked in IT / IoT services, testing and configuring
          indoor tracking devices (RTLS). Unfortunately, due to COVID I got laid off. But that opened a new door to pursue my dream of becoming a
          software engineer! With that spark I earned a certification in Full-Stack Software Engineering at Prime Digital Academy, here in Minneapolis.
        </p>
      </div>
      <span style="position: absolute" class="circles-left">
        <span class="position: relative">
          <div class="circle-1"/>
          <div class="circle-2"/>
        </span>
      </span>
    </v-col>
  </v-row>
</template>

import 'animate.css'
<script>
export default {
  name: 'AboutMeComponent',
  data() {
    return {
      data: true,
    }
  },
}
</script>
