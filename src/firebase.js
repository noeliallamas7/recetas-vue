import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyALom2miJRQCAjMmn9VzhT-Pu-5Sm5x_vw',
  authDomain: 'recetasricasnyam.firebaseapp.com',
  projectId: 'recetasricasnyam',
  storageBucket: 'recetasricasnyam.firebasestorage.app',
  messagingSenderId: '258747430349',
  appId: '1:258747430349:web:93515ef08a7b48df788084',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)