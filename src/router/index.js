import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app'
import {store} from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rate-students',
    meta:{layout:'main',requiresAuth:false},
    beforeEnter: (to, from, next) => {
      document.title = 'Оценки'
      next()
    },
    component: () => import('../views/RateStudents.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout:'empty',requiresAuth:false},
    beforeEnter: (to, from, next) => {
      document.title = 'Вход'
      next()
    },
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {layout:'main',requiresAuth:false},
    beforeEnter: (to, from, next) => {
      document.title = 'test'
      next()
    },
    component: () => import('../views/TestView.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta:{layout:'empty',requiresAuth:false, },
    beforeEnter: (to, from, next) => {
      document.title = 'Регистрация'
      next()
    },
    component: () => import('../views/RegisTer.vue')
  },
  
  {
    path: '/rate',
    name: 'rate',
    meta:{layout:'main',requiresAuth:true},
    beforeEnter: (to, from, next) => {
      document.title = 'Оценки'
      next()
    },
    component: () => import('../views/RateView.vue')
  },
  {
    path: '/list-students',
    name: 'list',
    meta:{layout:'main',requiresAuth:true},
    beforeEnter: (to, from, next) => {
      document.title = 'Ученики'
      next()
    },
    component: () => import('../views/ListStydents.vue')
  },
  
  {
    path: '/shedule',
    name: 'shedule',
    meta:{layout:'main',requiresAuth:true},
    beforeEnter: (to, from, next) => {
      document.title = 'Расписание'
      next()
    },
    component: () => import('../views/SheduleView.vue')
  },
  {
    path: '/homework',
    name: 'homework',
    meta:{layout:'main',requiresAuth:true},
    beforeEnter: (to, from, next) => {
      document.title = 'Домашние задания'
      next()
    },
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

  
  router.beforeEach((to, from, next) => {
    const isLoggedIn = !!store.state.user;
    if (to.meta.requiresAuth && !isLoggedIn) {
      next('/');
      alert('Вы не можете перейти на эту страницу без авторизации.');
    } else {
      next();
    }
  })
//   router.beforeEach((to, from, next) => {
//     if (to.path !== '/' && store.state.user == null) {
//         if (to.path !== '/') {
//             next({ path: '/' })
//         } else {
//             next()
//             alert('нельзя')
//         }
//     } else {
//         next()
//     }
// })

};



export default router
