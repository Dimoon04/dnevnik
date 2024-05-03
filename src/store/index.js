import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import {db} from '../db'
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    ratings: "",
    user: null
  },
  mutations: {
    ...vuexfireMutations,
    SET_USER(state, user) {
      state.user = user
   },
  },
  actions: {

    bindRat: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('ratings', db.collection('users'))
    }),

    async login(context,{email, password}){
      console.log(email)
      console.log(password)
      const promise = await firebase.auth().signInWithEmailAndPassword(email, password);
      try{
          if (promise){
          store.commit('SET_USER', promise.user)
          } else{
          throw new Error('error')
          }
      }catch(error){
          console.log(error)
      }
    },
    async signout(){
      try {
          await firebase.auth().signOut();
          store.commit('SET_USER', null)
      } catch (error) {
          console.error("Ошибка при выходе из системы:", error);
      }
    }
  },
})

