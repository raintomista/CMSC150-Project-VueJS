import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import Tab3 from './components/Tab3.vue'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/' },
    { path: '/polynomial-regression', component: Tab1 },
    { path: '/quadratic-spline', component: Tab2 },
    { path: '/minimization', component: Tab3 },
  ],
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
