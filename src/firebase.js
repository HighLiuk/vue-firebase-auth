import { initializeApp } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import {
  getFirestore,
  collection,
  onSnapshot,
  getDoc,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore"

const config = {
  apiKey: "AIzaSyBTFq9b6I7JRA4G41XrwrwfzAa80xuyq2E",
  authDomain: "luca-game-guidez.firebaseapp.com",
  projectId: "luca-game-guidez",
  appId: "1:38721697263:web:9e91390cec45277805f21a",
}

const app = initializeApp(config)
const auth = getAuth(app)
const db = getFirestore(app)

const users = collection(db, "users")
const guides = collection(db, "guides")

async function signup(email, password, bio) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, "users", user.uid), { bio })
}

async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password)
}

async function logout() {
  await signOut(auth)
}

function getCurrentUser(cb) {
  onAuthStateChanged(auth, cb)
}

function getData(collect, cb) {
  onSnapshot(collect, ({ docs }) => {
    cb(docs.map((doc) => doc.data()))
  })
}

function getGuides(cb) {
  getData(guides, cb)
}

async function createGuide(title, content) {
  await addDoc(guides, { title, content })
}

async function getUser(id) {
  const user = await getDoc(doc(db, "users", id))
  return user.data()
}

export {
  signup,
  login,
  logout,
  getCurrentUser,
  getGuides,
  getUser,
  createGuide,
}
