import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

const config = {
  apiKey: "AIzaSyBTFq9b6I7JRA4G41XrwrwfzAa80xuyq2E",
  authDomain: "luca-game-guidez.firebaseapp.com",
  projectId: "luca-game-guidez",
  appId: "1:38721697263:web:9e91390cec45277805f21a",
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = getFirestore(app)

async function createUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

async function logout() {
  await signOut(auth)
  console.log("User signed out")
}

export { createUser, login, logout }
