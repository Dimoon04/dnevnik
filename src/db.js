import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCk1JeK1dL5CzTWbTYoB4OM2YaYLJ_0ZOI",
  authDomain: "dnevnik-vkr-aizana.firebaseapp.com",
  projectId: "dnevnik-vkr-aizana",
  storageBucket: "dnevnik-vkr-aizana.appspot.com",
  messagingSenderId: "174361923000",
  appId: "1:174361923000:web:cc2bbaea69dc6c6789134d",
  measurementId: "G-ER8J67DXJ9"
}

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()


// const { db } = firebase
//     .initializeApp(firebaseConfig)
//     .firestore()
// export { db }

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
