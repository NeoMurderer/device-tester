import Vue from 'vue'
import Vuex from 'vuex'
import mediaDevice from './store/media-device';
import mediaRecorder from './store/media-recorder';
import userAgent from './store/user-agent';
import localStorage from './store/local-storage';
import sessionStorage from './store/session-storage';
import cookieStorage from './store/cookie-storage';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mediaDevice,
    mediaRecorder,
    userAgent,
    localStorage,
    sessionStorage,
    cookieStorage,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
