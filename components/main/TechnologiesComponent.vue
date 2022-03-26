<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row class="mt-15 main-row mx-md-3 px-0 px-md-2">
      <v-col
        cols="2"
        class="main-col-left d-flex align-center justify-center py-0"
      >
        <h2 class="text-center tech-lang-frame-text">Languages & Frameworks</h2>
      </v-col>
      <v-col cols="10" class="main-col-right">
        <span style="position: relative">
          <span class="vertical-divider-1" />
        </span>
        <v-row class="d-flex align-center justify-space-around ma-0">
          <div
            v-for="(image, i) in languageImages1"
            :key="i"
            class="pa-3 div-languages-images"
          >
            <div class="d-flex justify-center">
              <img
                :src="require(`~/static/technologies/${image.src}`)"
                height="65px"
                width="65px"
                class="mx-auto"
                alt="Javascript Icon"
              />
            </div>
            <p class="text-center pt-1 mb-0" style="font-size: 18px">
              {{ image.name }}
            </p>
          </div>
        </v-row>

        <!--        <v-row-->
        <!--          class="d-flex align-center justify-space-around ma-0"-->
        <!--          style="height: 50%"-->
        <!--        >-->
        <!--          <div-->
        <!--            v-for="(image, i) in languageImages1"-->
        <!--            :key="i"-->
        <!--            class="tech-div-1"-->
        <!--          >-->
        <!--            <div class="d-flex justify-center">-->
        <!--              <img-->
        <!--                height="65px"-->
        <!--                width="65px"-->
        <!--                class="mx-auto"-->
        <!--                :src="require(`~/static/technologies/${image.src}`)"-->
        <!--                alt="Javascript Icon"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <p class="text-center pt-2" style="font-size: 18px">-->
        <!--              {{ image.name }}-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </v-row>-->
        <!--        <v-row-->
        <!--          class="d-flex align-center justify-space-around ma-0"-->
        <!--          style="height: 50%"-->
        <!--        >-->
        <!--          <div-->
        <!--            v-for="(image, i) in languageImages2"-->
        <!--            :key="i"-->
        <!--            class="tech-div-2"-->
        <!--          >-->
        <!--            <div class="d-flex justify-center">-->
        <!--              <img-->
        <!--                height="65px"-->
        <!--                width="65px"-->
        <!--                class="mx-auto"-->
        <!--                :src="require(`~/static/technologies/${image.src}`)"-->
        <!--                alt="Javascript Icon"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <p class="text-center pt-2" style="font-size: 18px">-->
        <!--              {{ image.name }}-->
        <!--            </p>-->
        <!--          </div>-->
        <!--        </v-row>-->
      </v-col>
    </v-row>
    <v-row class="mt-15 main-row mx-md-3">
      <v-col
        cols="2"
        class="main-col-left d-flex align-center justify-center py-0"
      >
        <h2 class="text-center">Tools</h2>
      </v-col>
      <v-col cols="10" class="main-col-right py-0">
        <span style="position: relative">
          <span class="vertical-divider" />
        </span>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <div
            v-for="(image, i) in toolImages1"
            :key="i"
            style="width: 14%"
            class="pt-4 tech-div-3"
          >
            <div class="d-flex justify-center">
              <img
                height="65px"
                width="65px"
                class="mx-auto"
                :src="require(`~/static/technologies/${image.src}`)"
                alt="Javascript Icon"
              />
            </div>
            <p class="text-center pt-2" style="font-size: 18px">
              {{ image.name }}
            </p>
          </div>
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <div
            v-for="(image, i) in toolImages2"
            :key="i"
            style="width: 14%"
            class="pt-2 tech-div-4"
          >
            <div class="d-flex justify-center">
              <img
                height="65px"
                width="65px"
                class="mx-auto"
                :src="require(`~/static/technologies/${image.src}`)"
                alt="Javascript Icon"
              />
            </div>
            <p class="text-center pt-2" style="font-size: 18px">
              {{ image.name }}
            </p>
          </div>
        </v-row>
      </v-col>
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
      titleId: 'technologies-title',
      timer: false,
      languageImages1: [
        { name: 'Html', src: 'html.png' },
        { name: 'CSS', src: 'css.png' },
        { name: 'SCSS', src: 'scss.png' },
        { name: 'Vuetify', src: 'vuetify.png' },
        {
          name: 'Material UI',
          src: 'material-ui.png'
        },
        {
          name: 'Javascript',
          src: 'javascript.png'
        },
        { name: 'Nuxt.js', src: 'nuxtjs.png' },
        { name: 'Vue.js', src: 'vuejs.png' },
        { name: 'React.js', src: 'reactjs.svg' },
        { name: 'Nest.js', src: 'nestjs.svg' },
        { name: 'Node.js', src: 'nodejs.png' },
        {
          name: 'Postgresql',
          src: 'postgresql.png'
        },
        { name: 'Typeorm', src: 'typeorm.png' }
      ],
      languageImages3: [],
      languageImages2: [
        { name: 'Vue.js', src: 'vuejs.png' },
        { name: 'React.js', src: 'reactjs.svg' },
        { name: 'Nest.js', src: 'nestjs.svg' },
        { name: 'Node.js', src: 'nodejs.png' },
        {
          name: 'Postgresql',
          src: 'postgresql.png'
        },
        { name: 'Typeorm', src: 'typeorm.png' }
      ],
      toolImages1: [
        {
          name: 'Phpstorm',
          src: 'phpstorm.png'
        },
        { name: 'VS code', src: 'vscode.png' },
        { name: 'Git', src: 'git.png' },
        { name: 'Npm', src: 'npm.png' },
        { name: 'Docker', src: 'docker.png' }
      ],
      toolImages2: [
        {
          name: 'Bitbucket',
          src: 'bitbucket.png'
        },
        { name: 'Github', src: 'github.png' },
        { name: 'Heroku', src: 'heroku.png' },
        { name: 'Jira', src: 'jira.png' },
        { name: 'Monday', src: 'monday.png' }
      ]
    };
  },
  mounted() {
    // window.addEventListener('resize', this.onScreenResize, { passive: true });
    console.log('VUETIFY REAKPOINTS', this.$vuetify.breakpoint);
  },
  beforeDestroy() {
    // window.addEventListener('resize', this.onScreenResize);
  },
  methods: {
    // onScreenResize() {
    //   const width = window.innerWidth;
    //   console.log('width', width);
    // }
  }
};
</script>
