import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import VueAxios from 'vue-axios'
// import vueConfig from 'vue.config'
createApp(App).use(store,VueAxios).mount('#app')
