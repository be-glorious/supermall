import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body)

// Vue.config.devtools = true

createApp(App).use(store).use(router).use(toast).use(VueLazyload, {
  loading: require('assets/images/common/placeholder.jpg'),
}).mount('#app')