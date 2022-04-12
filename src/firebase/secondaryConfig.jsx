import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAp9FROgiWuFmkFcqOBCSaekruNG8B80Zs",
    authDomain: "prueba-conauto.firebaseapp.com",
    projectId: "prueba-conauto",
    storageBucket: "prueba-conauto.appspot.com",
    messagingSenderId: "43603495745",
    appId: "1:43603495745:web:6e619308b86730428d6fc0"
}


const FirebaseApp = initializeApp(firebaseConfig, "Secondary")

const db = getFirestore()

const auth = getAuth()

export {
    FirebaseApp,
    db,
    auth,
}