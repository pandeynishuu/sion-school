import Vue from 'vue'
import Vuex from 'vuex'
import * as about from './module/about_module'
import * as event from  './module/event_module'
import * as gallery from  './module/gallery_module'
import * as company from './module/company_module'
import * as information from './module/Information_module'
import * as notice from './module/notice_module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    about,
    event,
    gallery,
    company,
    information,
    notice
  }
})
