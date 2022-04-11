import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import connect from './modules/connect'

export default new Vuex.Store({
  modules: {
    connect
  }
})
