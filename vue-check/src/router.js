import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Two from './views/Two.vue'
import Three from './views/Three.vue'
import Loupan from './views/Loupan.vue'
import Four from './views/Four.vue'
import Five from './views/Five.vue'
import Six from './views/Six.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three,
      children:[
	      {
	      	path: '/loupan',
		      name: 'three',
		      component: Loupan
	      }
      ]
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
    {
      path: '/five',
      name: 'five',
      component: Five
    },
    {
      path: '/six',
      name: 'six',
      component: Six
    }
  ]
})
