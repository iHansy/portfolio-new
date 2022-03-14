<template>
  <v-app>
    <v-app-bar class="appbar" :height="`${$vuetify.breakpoint.smAndDown ? '50px' : '55px'}`" fixed>
      <span v-if="$vuetify.breakpoint.smAndDown" style="position: relative">
        <span style="position: absolute">
           <v-btn small icon class="hamburger-menu" @click="drawer = true">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        </span>
      </span>
      <v-col cols="12" md="4" lg="6" class="text-center">
        <div class="text-center d-inline-block">
          <h2>
            <span style="cursor: pointer" @click="handleClickScroll('about-me-component')">Hans Accola</span>
            <span>
              <v-icon
                color="black"
                style="cursor: pointer"
                @click="openLink('github')"
              >
                mdi-github
              </v-icon>
            </span>
            <span>
              <v-icon
                color="linkedInBlue"
                style="cursor: pointer"
                @click="openLink('linkedin')"
              >
                mdi-linkedin
              </v-icon>
            </span>
          </h2>
        </div>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="8" lg="6">
        <div
          class="d-flex justify-space-around px-10"
          style="margin-right: 30px"
        >
          <h3
            class="d-inline-block"
            @click="handleClickScroll('about-me-component')"
          >
            About Me
          </h3>
          <h3
            class="d-inline-block"
            @click="handleClickScroll('technologies-component')"
          >
            Technologies
          </h3>
          <h3
            class="d-inline-block"
            @click="handleClickScroll('projects-component')"
          >
            Projects
          </h3>
          <h3
            class="d-inline-block"
            @click="handleClickScroll('contact-component')"
          >
            Contact
          </h3>
        </div>
      </v-col>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 5"
      fixed
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          color="primary"
          active-class="test"
        >
          <v-list-item class="mb-0 py-1" @click="handleClickScroll('about-me-component')">
            <v-icon class="pr-4">mdi-account</v-icon>
            About Me
          </v-list-item>
            <v-divider/>
          <v-list-item class="mb-0 py-1" @click="handleClickScroll('technologies-component')">
            <v-icon class="pr-4">mdi-web</v-icon>
            Technologies
          </v-list-item>
            <v-divider/>
          <v-list-item class="mb-0 py-1" @click="handleClickScroll('projects-component')">
            <v-icon class="pr-4">mdi-clipboard-text</v-icon>
            Projects
          </v-list-item>
            <v-divider/>
          <v-list-item class="mb-0 py-1" @click="handleClickScroll('contact-component')">
            <v-icon class="pr-4">mdi-hand-wave</v-icon>
            Contact
          </v-list-item>
            <v-divider/>
           <v-list-item class="mb-0 py-1" @click="closeDrawer">
            <v-icon class="pr-4">mdi-emoticon-excited</v-icon>
            Feeling Adventurous?
          </v-list-item>
            <v-divider/>
           <v-list-item class="mb-0 py-1" @click="closeDrawer">
            <v-icon class="pr-4">mdi-trophy</v-icon>
            Highscores
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Nuxt />
    <v-footer class="footer" fixed>
      <v-col cols="6" class="text-center pa-0">
        <span v-if="$vuetify.breakpoint.smAndUp">Designed & developed by </span>Hans Accola &copy;
        {{ new Date().getFullYear() }}
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-center justify-center pa-0"
      >
        <div v-if="$vuetify.breakpoint.smAndUp" class="cursor-pointer">Feeling adventurous?</div>
        <v-icon v-else medium color="primary" class="cursor-pointer">
          mdi-emoticon-excited
        </v-icon>
        <div class="footer-game-divider mx-2" />
        <v-icon medium color="primary" class="cursor-pointer">
          mdi-trophy
        </v-icon>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    openLink(name) {
      let link = ''
      switch (name) {
        case 'github':
          link = 'https://github.com/iHansy'
          break
        case 'linkedin':
          link = 'https://www.linkedin.com/in/hans-accola-80b48b1b4/'
          break
      }
      window.open(`${link}`, '_blank')
    },
      handleClickScroll(elementId) {
      this.drawer = false
      const scrollTarget = document.getElementById(`${elementId}`)
      const scrollOptions = {
        duration: 200,
        offset: 75,
        easing: 'easeInOutCubic',
      }
      this.$vuetify.goTo(scrollTarget, scrollOptions)
    },
    closeDrawer() {
      this.drawer = false
    }
  },
}
</script>
