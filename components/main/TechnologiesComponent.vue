<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row class="mt-15 main-row">
      <v-col
        cols="2"
        class="background-cyan main-col-left d-flex align-center text-center"
      >
        <h2>Languages & Frameworks</h2>
      </v-col>
      <v-col cols="10" class="background-yellow main-col-right">
        <v-row
          ><img
            :src="require('~/static/technologies/javascript.png')"
            alt="Javascript Icon"
          />
        </v-row>
        <v-row> </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-15 main-row">
      <v-col cols="2"
        >For loop for images? Create array with paths ect..
      </v-col>
      <v-col cols="10"> </v-col>
    </v-row>
  </div>
</template>

<script>
import BackgroundCirclesComponent from '~/components/reuseables/BackgroundCirclesComponent';
import TitleBracket from '~/components/reuseables/TitleBracket';

export default {
  name: 'TechnologiesComponent',
  components: { BackgroundCirclesComponent, TitleBracket },
  data() {
    return {
      title: 'Technologies',
      titleId: 'technologies-title'
    };
  }
};
</script>
