export const state = () => ({
    pageTitle: 'test page title'
  })
  
  export const getters = {
    getPageTitle(state) {
        return state.pageTitle
      },
  }

  export const mutations = {
    SET_PAGE_TITLE(state, title) {
        state.pageTitle = title
      },
  }

  export const actions = {
    setPageTitle({ commit }, { title }) {
        commit('SET_PAGE_TITLE', title)
    },
  }