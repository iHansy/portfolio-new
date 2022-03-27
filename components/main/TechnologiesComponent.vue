<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row class="mt-5 mt-md-15 main-row mx-md-3 px-0 px-md-2">
      <v-col
        cols="12"
        md="2"
        class="main-col-left d-flex align-center justify-center pt-6 pb-4 py-md-0"
      >
        <h2 class="text-center">Languages & Frameworks</h2>
      </v-col>
      <div class="horizontal-divider-1"></div>
      <v-col cols="12" md="10" class="main-col-right">
        <span style="position: relative">
          <span class="vertical-divider-1" />
        </span>
        <v-row class="d-flex align-center justify-space-around ma-0">
          <div
            v-for="(image, i) in languageImages"
            :key="i"
            class="pa-3 div-languages-images"
          >
            <div class="d-flex justify-center">
              <img
                :src="require(`~/static/technologies/${image.src}`)"
                class="mx-auto tech-img"
                :alt="image.name"
              />
            </div>
            <p class="text-center pt-1 mb-0 tech-p-tag">
              {{ image.name }}
            </p>
          </div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-10 mt-md-15 main-row mx-md-3 px-0 px-md-2">
      <v-col
        cols="12"
        md="2"
        class="main-col-left d-flex align-center justify-center pt-6 pb-4 py-md-0"
      >
        <h2 class="text-center">Tools</h2>
      </v-col>
      <div class="horizontal-divider-1"></div>
      <v-col cols="12" md="10" class="main-col-right">
        <span style="position: relative">
          <span class="vertical-divider-2" />
        </span>
        <v-row class="d-flex align-center justify-space-around ma-0">
          <div
            v-for="(image, i) in toolImages"
            :key="i"
            class="pa-3 div-tools-images"
          >
            <div class="d-flex justify-center">
              <img
                :src="require(`~/static/technologies/${image.src}`)"
                class="mx-auto tech-img"
                :alt="image.name"
              />
            </div>
            <p class="text-center pt-1 mb-0 tech-p-tag">
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
      languageImages: [
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
      toolImages: [
        {
          name: 'Phpstorm',
          src: 'phpstorm.png'
        },
        { name: 'VS code', src: 'vscode.png' },
        { name: 'Git', src: 'git.png' },
        { name: 'Npm', src: 'npm.png' },
        { name: 'Docker', src: 'docker.png' },
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
