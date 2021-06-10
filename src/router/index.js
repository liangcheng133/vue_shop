import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
		{ path: '/', redirect: '/login' },
    { path: '/login', component: Login },
  ]
})
