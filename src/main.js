import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueKonva from 'vue-konva'

Vue.use(VueKonva)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
