<template>
  <div class="technologies">
    <v-row style="z-index: 9 !important; position: relative !important">
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row
      class="background-cyan mt-10"
      style="
        height: 250px;
        z-index: 10 !important;
        position: relative !important;
        border-radius: 15%;
      "
    >
      <v-col cols="2"
        ><p>
          CHANGE IMG BORDER AND ROW BORDERS TO PX AND ALSO REFACTOR ALL STYLES
          ON ROWS HERE TO A CSS CLASS... PROBABLY ADD A DIV AROUND THE ROWS TOO
        </p></v-col
      >
      <v-col cols="10"> </v-col>
    </v-row>
    <v-row
      class="background-cyan mt-10"
      style="
        height: 250px;
        z-index: 10;
        position: relative;
        border-radius: 25px;
      "
    >
      <v-col cols="2"> </v-col>
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
