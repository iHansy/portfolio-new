<template>
  <div class="technologies">
    <v-row>
      <BackgroundCirclesComponent class="tech-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
    <v-row class="mt-15 main-row">
      <v-col
        cols="2"
        class="main-col-left d-flex align-center justify-center py-0"
      >
        <h2 class="text-center">Languages & Frameworks</h2>
      </v-col>
      <v-col cols="10" class="main-col-right py-0">
        <span style="position: relative">
          <span class="vertical-divider" />
        </span>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <v-div
            v-for="(image, i) in languageTopImages"
            :key="i"
            style="width: 14%"
            class="pt-4 tech-div"
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
          </v-div>
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <v-div
            v-for="(image, i) in languageBottomImages"
            :key="i"
            style="width: 14%"
            class="pt-2 tech-div"
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
          </v-div>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-15 main-row">
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
          <v-div
            v-for="(image, i) in toolTopImages"
            :key="i"
            style="width: 14%"
            class="pt-4 tech-div"
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
          </v-div>
        </v-row>
        <v-row
          class="d-flex align-center justify-space-around ma-0"
          style="height: 50%"
        >
          <v-div
            v-for="(image, i) in toolBottomImages"
            :key="i"
            style="width: 14%"
            class="pt-2 tech-div"
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
          </v-div>
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
        { name: 'Nuxt.js', src: 'nuxtjs.png' }
      ],
      languageBottomImages: [
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
      toolTopImages: [
        {
          name: 'Phpstorm',
          src: 'phpstorm.png'
        },
        { name: 'VS code', src: 'vscode.png' },
        { name: 'Git', src: 'git.png' },
        { name: 'Npm', src: 'npm.png' },
        { name: 'Docker', src: 'docker.png' }
      ],
      toolBottomImages: [
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
  }
};
</script>
