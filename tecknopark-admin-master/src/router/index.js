import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
const Login = () => import('@/pages/login')
const LoginByEmail = () => import('@/pages/login-by-email')
const Profile = () => import('@/pages/profile')
const ChangePassword = () => import('@/pages/change-password')
const Activator = () => import('@/pages/activator')
const ResetPassword = () => import('@/pages/reset-password')
const Register = () => import('@/pages/register')
const News = () => import('@/pages/news')
const Users = () => import('@/pages/users')
Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['account/isAuthenticated']) {
    return next()
  }
  next('/news')
}

const ifMustChangePassword = (to, from, next) => {
  if (store.getters['account/mustChangePassword']) {
    next()
    return
  }
  next('/news')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters['account/isAuthenticated']) {
    if (store.getters['account/mustChangePassword']) {
      store.commit('setError', 'Необходимо сменить пароль!')
      next('/reset-password')
    } else {
      return next()
    }
  }
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'News',
      component: News,
      beforeEnter: ifAuthenticated
    },
	{
      path: '/users',
      name: 'Users',
      component: Users,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/login-by-email',
      name: 'LoginByEmail',
      component: LoginByEmail,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/change-password',
      name: 'ChangePassword',
      component: ChangePassword,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword,
      beforeEnter: ifMustChangePassword
    },
    {
      path: '/activator',
      name: 'Activator',
      component: Activator
    },
    {
      path: '/logout',
      name: 'Logout',
      beforeEnter: (to, from, next) => {
        store.commit('account/logout')
        next('/login')
      }
    }
  ]
})
