<template>
  <div class="div-page-container" style="position: relative; top: 60px">
    <AboutMeComponent id="about-me-component" class="mb-6" />
    <TechnologiesComponent class="pt-6 mb-6" />
    <ProjectsComponent class="pt-6 mb-6" />
    <ContactComponent class="pt-6 mb-6" />
  </div>
</template>

<script>
import AboutMeComponent from '~/components/main/AboutMeComponent';
import TechnologiesComponent from '~/components/main/TechnologiesComponent';
import ProjectsComponent from '~/components/main/ProjectsComponent';
import ContactComponent from '~/components/main/ContactComponent';

export default {
  name: 'IndexPage',
  components: {
    AboutMeComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactComponent
  },
  head() {
    return {
      title: 'Hans Accola'
    };
  }
};
</script>
