import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app'
import {store} from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {layout:'empty'},
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta:{layout:'empty'},
    component: () => import('../views/RegisTer.vue')
  },
  {
    path: '/rate',
    name: 'rate',
    meta:{layout:'main'},
    component: () => import('../views/RateView.vue')
  },
  {
    path: '/shedule',
    name: 'shedule',
    meta:{layout:'main'},
    component: () => import('../views/SheduleView.vue')
  },
  {
    path: '/homework',
    name: 'homework',
    meta:{layout:'main'},
    component: () => import('../views/HomeWork.vue')
  }
]

const router = new VueRouter({
  routes
})


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }else{
    localStorage.removeItem('currentUser');
  }
});

window.onload = function() {
  let currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    let user = JSON.parse(currentUser);
    store.commit('SET_USER',user)
  }

  // router.beforeEach((to, from, next) => {
  //   if (to.path !== '/' && store.state.user == null){
  //     next({ path: '/' })
  //     alert('нельзяы')
  //   } 
  //   else next()
  // })
  router.beforeEach((to, from, next) => {
    if (to.path !== '/' && store.state.user == null) {
        if (to.path !== '/') {
            next({ path: '/' })
        } else {
            next()
            alert('нельзя')
        }
    } else {
        next()
    }
})

};



export default router
