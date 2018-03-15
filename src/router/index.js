import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Details from '@/components/Details'
import Add from '@/components/Add'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/projects/vue/', name: 'Users', component: Users },
    { path: '/projects/vue/user:id', name: 'Details', component: Details },
    { path: '/projects/vue/user/add', name: 'Add', component: Add },
    { path: '/projects/vue/user/update:id', name: 'Update', component: Update }
  ]
})
