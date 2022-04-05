<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row
      id="languages-row"
      class="mt-5 mt-sm-10 mt-lg-15 main-row mx-md-3 px-0 px-md-2"
    >
      <v-col
        cols="12"
        md="2"
        class="main-col-left d-flex align-center justify-center pt-6 pb-4 py-md-0 opacity-0 div-languages-left"
      >
        <h2 class="text-center">Languages & Frameworks</h2>
      </v-col>
      <div class="horizontal-divider-1 div-languages-left opacity-0"></div>
      <v-col cols="12" md="10" class="main-col-right">
        <span style="position: relative" class="div-languages-left opacity-0">
          <span class="vertical-divider-1" />
        </span>
        <v-row class="d-flex align-center justify-space-around ma-0">
          <div
            v-for="(image, i) in languageImages"
            :key="i"
            :class="`pa-3 div-languages-images opacity-0 ${
              leftLanguagesDivs(i)
                ? 'div-languages-left'
                : 'div-languages-right'
            }`"
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
    <v-row id="tools-row" class="mt-10 mt-md-15 main-row mx-md-3 px-0 px-md-2">
      <v-col
        cols="12"
        md="2"
        class="main-col-left d-flex align-center justify-center pt-6 pb-4 py-md-0 opacity-0 div-tools-left"
      >
        <h2 class="text-center">Tools</h2>
      </v-col>
      <div class="horizontal-divider-1 div-tools-left opacity-0"></div>
      <v-col cols="12" md="10" class="main-col-right">
        <span style="position: relative" class="div-tools-left opacity-0">
          <span class="vertical-divider-2" />
        </span>
        <v-row class="d-flex align-center justify-space-around ma-0">
          <div
            v-for="(image, i) in toolImages"
            :key="i"
            :class="`pa-3 div-tools-images opacity-0 ${
              leftToolsDivs(i) ? 'div-tools-left' : 'div-tools-right'
            }`"
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
      triggerLanguages: true,
      triggerTools: true,
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
      if (this.triggerLanguages) {
        this.buildAndTriggerTransition(
          'div-languages-right',
          'div-languages-left',
          'languages-row',
          'languages'
        );
      }
      if (this.triggerTools) {
        this.buildAndTriggerTransition(
          'div-tools-right',
          'div-tools-left',
          'tools-row',
          'tools'
        );
      }
    },
    buildAndTriggerTransition(
      divsRightClass,
      divsLeftClass,
      containerRowId,
      triggerType
    ) {
      const divsRight = document.getElementsByClassName(divsRightClass);
      const divsLeft = document.getElementsByClassName(divsLeftClass);
      const containerRow = document.getElementById(containerRowId);
      const rect = containerRow.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      let elemBottomComparison = window.innerHeight;
      if (window.innerWidth < 600) {
        elemBottomComparison += 200;
      }

      const triggerFade = elemTop >= 0 && elemBottom <= elemBottomComparison;
      if (triggerFade) {
        for (const el of divsRight) {
          el.classList.remove('opacity-0');
          el.classList.add('animate__animated', 'animate__fadeInRightBig');
        }

        for (const el of divsLeft) {
          el.classList.remove('opacity-0');
          el.classList.add('animate__animated', 'animate__fadeInLeftBig');
        }

        if (triggerType === 'languages') {
          this.triggerLanguages = false;
        } else {
          this.triggerTools = false;
        }

        window.setTimeout(() => {
          containerRow.classList.add('main-row-transitions');
        }, 1000);
      }
    },
    leftLanguagesDivs(i) {
      if (i === 0 || i === 1 || i === 2 || i === 7 || i === 8 || i === 9) {
        return true;
      }
    },
    leftToolsDivs(i) {
      if (i === 0 || i === 1 || i === 5 || i === 6) {
        return true;
      }
    }
  }
};
</script>
