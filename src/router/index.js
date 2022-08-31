import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage'
import MainPage from '../pages/MainPage'
import StartPage from '../pages/StartPage'
import SetupPage from '../pages/SetupPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/start', component: StartPage },
  { path: '/setup', component: SetupPage },
  { path: '/:code', component: MainPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
