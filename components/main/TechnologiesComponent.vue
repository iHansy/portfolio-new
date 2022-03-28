<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row
      class="mt-5 mt-sm-10 mt-lg-15 main-row mx-md-3 px-0 px-md-2 animate__animated animate__fadeInLeft"
    >
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
    <v-row
      id="tech-row-tools"
      class="mt-10 mt-md-15 main-row mx-md-3 px-0 px-md-2"
    >
      <v-col
        cols="12"
        md="2"
        class="main-col-left d-flex align-center justify-center pt-6 pb-4 py-md-0 opacity-0"
      >
        <h2 class="text-center">Tools</h2>
      </v-col>
      <div class="horizontal-divider-1"></div>
      <v-col
        id="tech-col-tools"
        cols="12"
        md="10"
        class="main-col-right opacity-0"
      >
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
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      let trigger = true;
      const toolsElCol = document.getElementById('tech-col-tools');
      const toolsElRow = document.getElementById('tech-row-tools');
      const rect = toolsElCol.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      console.log('ELEMTOP', elemTop);
      console.log('ELEMBOTTOM', elemBottom);

      const triggerFade = elemTop >= 0 && elemBottom <= window.innerHeight;
      if (trigger && triggerFade) {
        toolsElCol.classList.remove('opacity-0');
        toolsElRow.style.borderRight = 'grey 2px solid';
        toolsElRow.style.borderRadius = '50px';
        toolsElCol.classList.add('animate__animated', 'animate__fadeInLeft');
        trigger = false;
      }
    }
  }
};
</script>
