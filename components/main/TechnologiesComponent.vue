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
          class="d-flex align-center justify-space-around"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in languageTopImages"
            :key="i"
            height="75px"
            width="75px"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around"
          style="height: 50%"
        >
          <img
            v-for="(image, i) in languageBottomImages"
            :key="i"
            height="75px"
            width="75px"
            class="ma-2"
            :src="require(`~/static/technologies/${image.src}`)"
            alt="Javascript Icon"
          />
        </v-row>
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
      titleId: 'technologies-title',
      timer: false,
      languageTopImages: [
        { name: 'Html', src: 'html.png' },
        { name: 'CSS', src: 'css.png' },
        { name: 'SCSS', src: 'scss.png' },
        { name: 'Vuetify', src: 'vuetify.png' },
        { name: 'Material UI', src: 'material-ui.png' },
        { name: 'Javascript', src: 'javascript.png' },
        { name: 'Nuxt.js', src: 'nuxtjs.png' }
      ],
      languageBottomImages: [
        { name: 'Vue.js', src: 'vuejs.png' },
        { name: 'React.js', src: 'reactjs.svg' },
        { name: 'Nest.js', src: 'nestjs.svg' },
        { name: 'Node.js', src: 'nodejs.png' },
        { name: 'Postgresql', src: 'postgresql.png' },
        { name: 'Typeorm', src: 'typeorm.png' }
      ],
      toolTopImages: [
        { name: 'Phpstorm', src: 'phpstorm.png' },
        { name: 'VS code', src: 'vscode.png' },
        { name: 'Git', src: 'git.png' },
        { name: 'Npm', src: 'npm.png' },
        { name: 'Docker', src: 'docker.png' }
      ],
      toolBottomImages: [
        { name: 'Bitbucket', src: 'bitbucket.png' },
        { name: 'Github', src: 'github.png' },
        { name: 'Heroku', src: 'heroku.png' },
        { name: 'Jira', src: 'jira.png' },
        { name: 'Monday', src: 'monday.png' }
      ]
    };
  }
};
</script>
