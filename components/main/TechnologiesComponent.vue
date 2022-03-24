<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row class="mt-15 main-row">
      <v-col
        cols="2"
        class="background-cyan main-col-left d-flex align-center justify-center py-0"
      >
        <h2 class="text-center">Languages & Frameworks</h2>
      </v-col>
      <v-col cols="10" class="background-yellow main-col-right py-0">
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in languageTopImages"
            :key="i"
            :height="image.height"
            :width="image.width"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in languageBottomImages"
            :key="i"
            :height="image.height"
            :width="image.width"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-15 main-row">
      <v-col
        cols="2"
        class="background-cyan main-col-left d-flex align-center justify-center"
      >
        <h2 class="text-center">Tools</h2>
      </v-col>
      <v-col cols="10" class="background-yellow main-col-right">
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in toolTopImages"
            :key="i"
            :height="image.height"
            :width="image.width"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in toolBottomImages"
            :key="i"
            :height="image.height"
            :width="image.width"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
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
      languageTopImages: [
        { name: 'Html', src: 'html.png', height: '75px', width: '75px' },
        { name: 'CSS', src: 'css.png', height: '75px', width: '75px' },
        { name: 'SCSS', src: 'scss.png', height: '75px', width: '75px' },
        { name: 'Vuetify', src: 'vuetify.png', height: '75px', width: '75px' },
        {
          name: 'Material UI',
          src: 'material-ui.png',
          height: '75px',
          width: '75px'
        },
        {
          name: 'Javascript',
          src: 'javascript.png',
          height: '75px',
          width: '75px'
        },
        { name: 'Nuxt.js', src: 'nuxtjs.png', height: '75px', width: '75px' }
      ],
      languageBottomImages: [
        { name: 'Vue.js', src: 'vuejs.png', height: '75px', width: '75px' },
        { name: 'React.js', src: 'reactjs.svg', height: '75px', width: '75px' },
        { name: 'Nest.js', src: 'nestjs.svg', height: '75px', width: '75px' },
        { name: 'Node.js', src: 'nodejs.png', height: '75px', width: '90px' },
        {
          name: 'Postgresql',
          src: 'postgresql.png',
          height: '75px',
          width: '75px'
        },
        { name: 'Typeorm', src: 'typeorm.png', height: '75px', width: '75px' }
      ],
      toolTopImages: [
        {
          name: 'Phpstorm',
          src: 'phpstorm.png',
          height: '75px',
          width: '75px'
        },
        { name: 'VS code', src: 'vscode.png', height: '75px', width: '75px' },
        { name: 'Git', src: 'git.png', height: '75px', width: '75px' },
        { name: 'Npm', src: 'npm.png', height: '75px', width: '75px' },
        { name: 'Docker', src: 'docker.png', height: '75px', width: '75px' }
      ],
      toolBottomImages: [
        {
          name: 'Bitbucket',
          src: 'bitbucket.png',
          height: '75px',
          width: '75px'
        },
        { name: 'Github', src: 'github.png', height: '75px', width: '75px' },
        { name: 'Heroku', src: 'heroku.png', height: '75px', width: '75px' },
        { name: 'Jira', src: 'jira.png', height: '75px', width: '75px' },
        { name: 'Monday', src: 'monday.png', height: '75px', width: '75px' }
      ]
    };
  }
};
</script>
