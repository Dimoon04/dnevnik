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
    user: null,
    width: false,
    shedule: [],
    sheduleOUT: [],
    test:[],
    students:[],
    newStudent: {
      fio: '',
      classes: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: ''
    },
    homework:[],
    homeWorks: []
  },
  mutations: {
    ...vuexfireMutations,
    SET_USER(state, user) {
      state.user = user
    },
    saveWidth(state, width) {
      state.width = width;
    },
    SET_SHEDULE(state, shedule) {
      state.shedule = shedule
    },
    SET_STUDENT(state, newStudent) {
      state.newStudent = newStudent
    },
    SET_STUDENTS(state, students) {
      state.students = students
    },
    UPDATE_STUDENT(state, { index, student }) {
      Vue.set(state.students, index, student)
    },
    ADD_HOME_WORK(state, homeWork) {
      state.homeWorks.push(homeWork)
    },
    
  },
  actions: {
    bindRat: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('ratings', db.collection('users'))
    }),
    bindTest: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('test', db.collection('test_shedule'))
    }),
    bindStudents: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('students', db.collection('students'))
    }),
    bindHomework: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('homework', db.collection('homework'))
    }),
    async addStudent({ commit }, newStudent) {
      try {
        await db.collection('students').add(newStudent)
        commit('SET_STUDENT', [this.state.newStudent, newStudent])
      } catch (error) {
        console.error('Ошибка при добавлении расписания:', error)
      }
    },
    delStudent: firestoreAction((context, payload) => {
      return db.collection('students').doc(payload).delete()
    }),
    delShedule: firestoreAction((context, payload) => {
      return db.collection('shedule').doc(payload).delete(),
      console.log("урок дален")

    }),
    delHomeWork: firestoreAction((context, payload) => {
      return db.collection('homework').doc(payload).delete()
    }),
    


    updateStudent: firestoreAction((context, {id, doc}) => {
      db.collection('students')
          .doc(id)
          .update(doc)
    }),
    
    async fetchShedule({ commit }) {
      try {
        const snapshot = await db.collection('shedule').get()
        const sheduleOUT = snapshot.docs.map(doc => doc.data())
        console.log('Загруженные данные:', sheduleOUT)
        commit('SET_SHEDULE', sheduleOUT)
      } catch (error) {
        console.error('Ошибка при получении расписания:', error)
      }
    },
    async addShedule({ commit }, sheduleData) {
      try {
        await db.collection('shedule').add(sheduleData)
        console.log('Расписание успешно добавлено')
        commit('SET_SHEDULE', [this.state.shedule, sheduleData])
      } catch (error) {
        console.error('Ошибка при добавлении расписания:', error)
      }
    },
    async clearShedule({ commit }) {
      try {
        const snapshot = await db.collection('shedule').get()
        const batch = db.batch()
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref)
        })
        await batch.commit()
        commit('SET_SHEDULE', [])
        console.log('Все записи расписания удалены')
      } catch (error) {
        console.error('Ошибка при очистке расписания:', error)
      }
    },
    addHomeWork({ commit }, homeWork) {
      db.collection('homework').add(homeWork)
        .then((docRef) => {
          commit('ADD_HOME_WORK', { ...homeWork, id: docRef.id })
        })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
    },
    

    async login(context,{email, password}){
      // console.log(email)
      // console.log(password)
      const promise = await firebase.auth().signInWithEmailAndPassword(email, password);
      try{
          if (promise){
          store.commit('SET_USER', promise.user)
          } else{
          throw new Error('error')
          }
      }catch(error){
          // console.log(error)
      }
    },
    async registerUser({ commit }, { password }) {
      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(password, password);
        const user = userCredential.user;
        commit('setUser', user);
        // Добавьте дополнительную логику регистрации, если необходимо
      } catch (error) {
        console.error(error);
        // Обработайте ошибку регистрации
      }
    },
    async signout(){
      try {
          await firebase.auth().signOut();
          store.commit('SET_USER', null)
      } catch (error) {
          // console.error("Ошибка при выходе из системы:", error);
      }
    }
  },
})

store.dispatch('fetchShedule')
store.dispatch('bindTest')
store.dispatch('bindStudents')
store.dispatch('bindHomework')