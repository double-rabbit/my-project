import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// var vm = new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
// vm.$mount()
