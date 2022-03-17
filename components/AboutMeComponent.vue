<template>
  <v-row class="about-me">
    <BackgroundCirclesComponent style="opacity: 8%" />
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <div class="pb-15">
        <v-img
          :src="require('/static/headshot.jpg')"
          class="headshot-img animate__animated animate__fadeInLeft"
        />
      </div>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center align-center">
      <div class="pb-15 animate__animated animate__fadeInRight">
        <h1 class="text-center pb-7">Welcome</h1>
        <p class="pb-3">
          Hi there, I’m Hans Accola, a full-stack software developer. I’m
          originally from Norway, but moved to Minnesota when I was a child and
          have lived here ever since. Here are a few of my favorite things to do
          outside of coding:
        </p>
        <ul class="mb-7 pl-10">
          <li>Going on hikes with my wife, Marie.</li>
          <li>Playing basketball and working out at the gym.</li>
          <li>Bringing my 95lb black lab to the dog park.</li>
          <li>
            Taking typing speed tests on 10fastfingers.com, my max so far is
            150+ WPM.
          </li>
        </ul>
        <p>
          My professional experience in the IT field started in 2019 as field
          technician, testing and configuring tracking (RTLS) devices. That time
          in the IT field sparked a new dream to become a software developer. So
          in 2020, I attended Prime Digital Academy, a full-stack software
          engineering bootcamp. With my newly gained knowledge and strong hunger
          to prove myself as a software developer, I landed a role at Home and
          Local Services, a digital marketing agency that specializes in the
          home services industry. I started as a junior software developer and
          was recently promoted to a manager, with 1 direct report. My team and
          I maintain a part of the current software and are developing an
          exciting and fresh up-to-date version.
        </p>
        <!--        <p>-->
        <!--          My professional IT experience started in 2019 as an inside medical-->
        <!--          sales rep. After that I worked in IT / IoT services, testing and-->
        <!--          configuring indoor tracking devices (RTLS). Unfortunately, due to-->
        <!--          COVID I got laid off. But that opened a new door to pursue my dream of-->
        <!--          becoming a software engineer! With that spark I earned a certification-->
        <!--          in Full-Stack Software Engineering at Prime Digital Academy, here in-->
        <!--          Minneapolis.-->
        <!--        </p>-->
      </div>
    </v-col>
  </v-row>
</template>

import 'animate.css'
<script>
export default {
  name: 'AboutMeComponent',
  data() {
    return {
      data: true
    };
  }
};
</script>
