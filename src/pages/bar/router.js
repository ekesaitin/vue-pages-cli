import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: 'bar.html',
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: _ => import('./views/index/index'), meta: { title: 'index' } },
    { path: '/p2', name: 'p2', component: _ => import('./views/p2/p2'), meta: { title: 'p2' } }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
