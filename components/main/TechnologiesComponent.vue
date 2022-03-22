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
        <v-row>
          <img
            v-for="(image, i) in images"
            :key="i"
            :src="require('~/static/technologies/bitbucket.png')"
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
      titleId: 'technologies-title',
      images: [
        { name: 'Bitbucket', src: '~/static/technologies/bitbucket.png' },
        { name: 'CSS', src: '~/static/technologies/css.png' },
        { name: 'Docker', src: '~/static/technologies/docker.png' },
        { name: 'Git', src: '~/static/technologies/git.png' },
        { name: 'Github', src: '~/static/technologies/github.png' },
        { name: 'Heroku', src: '~/static/technologies/heroku.png' },
        { name: 'Html', src: '~/static/technologies/html.png' },
        { name: 'Javascript', src: '~/static/technologies/javascript.png' },
        { name: 'Jira', src: '~/static/technologies/jira.png' },
        { name: 'Material UI', src: '~/static/technologies/material-ui.png' },
        { name: 'Monday', src: '~/static/technologies/monday.png' },
        { name: 'Nest.js', src: '~/static/technologies/nestjs.svg' },
        { name: 'Node.js', src: '~/static/technologies/nodejs.png' },
        { name: 'Npm', src: '~/static/technologies/npm.png' },
        { name: 'Phpstorm', src: '~/static/technologies/phpstorm.jpeg' },
        { name: 'Postgresql', src: '~/static/technologies/postgresql.png' },
        { name: 'React.js', src: '~/static/technologies/reactjs.svg' },
        { name: 'Scss', src: '~/static/technologies/scss.png' },
        { name: 'Typeorm', src: '~/static/technologies/typeorm.jpeg' },
        { name: 'Vscode', src: '~/static/technologies/vscode.png' },
        { name: 'Vue.js', src: '~/static/technologies/vuejs.png' },
        { name: 'Vuetify', src: '~/static/technologies/vuetify.png' }
      ]
    };
  }
};
</script>
