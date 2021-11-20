import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const config = {
  apiKey: "AIzaSyBTFq9b6I7JRA4G41XrwrwfzAa80xuyq2E",
  authDomain: "luca-game-guidez.firebaseapp.com",
  projectId: "luca-game-guidez",
  appId: "1:38721697263:web:9e91390cec45277805f21a",
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = getFirestore(app)

const guides = collection(db, "guides")

async function signup(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
}

async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

async function logout() {
  await signOut(auth)
}

function getUser(cb) {
  onAuthStateChanged(auth, cb)
}

async function getData(collect) {
  const { docs } = await getDocs(collect)
  return docs.map((doc) => doc.data())
}

async function getGuides() {
  return getData(guides)
}

export { signup, login, logout, getUser, getGuides }
