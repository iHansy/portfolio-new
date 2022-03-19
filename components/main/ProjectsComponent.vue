<template>
  <div class="projects">
    <v-row>
      <BackgroundCirclesComponent class="projects-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
  </div>
</template>

<script>
import BackgroundCirclesComponent from '~/components/reuseables/BackgroundCirclesComponent';
import TitleBracket from '~/components/reuseables/TitleBracket';

export default {
  name: 'ProjectsComponent',
  components: { BackgroundCirclesComponent, TitleBracket },
  data() {
    return {
      title: 'Projects',
      titleId: 'projects-title'
    };
  }
};
</script>
