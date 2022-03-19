<template>
  <div class="contact">
    <v-row>
      <BackgroundCirclesComponent class="contact-circles-component" />
      <TitleBracket :title="title" :title-id="titleId" />
    </v-row>
  </div>
</template>

<script>
import BackgroundCirclesComponent from '~/components/reuseables/BackgroundCirclesComponent';
import TitleBracket from '~/components/reuseables/TitleBracket';

export default {
  name: 'ContactComponent',
  components: { BackgroundCirclesComponent, TitleBracket },
  data() {
    return {
      title: 'Contact',
      titleId: 'contact-title'
    };
  }
};
</script>
