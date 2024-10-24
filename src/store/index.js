import { createStore } from 'vuex'
import { useDisplay } from 'vuetify'

export default createStore({ 
  state: {
  },
  getters: {
    getIsMobile () {
      return useDisplay().mobile.value
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
