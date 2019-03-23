import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCntqlGcBGFpmsBPzixpDMmpcligLilY50",
  authDomain: "fire-chat-63776.firebaseapp.com",
  databaseURL: "https://fire-chat-63776.firebaseio.com",
  projectId: "fire-chat-63776",
  storageBucket: "fire-chat-63776.appspot.com",
  messagingSenderId: "744748768608"
}

firebase.initializeApp(config)

const db = firebase.firestore()

export { db, firebase }
