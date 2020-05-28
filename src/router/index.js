import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Main from '../components/AppHome'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Main', component: Main,mounted() {
    document.body.insertBefore(this.$el, document.body.firstChild)
  }},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router