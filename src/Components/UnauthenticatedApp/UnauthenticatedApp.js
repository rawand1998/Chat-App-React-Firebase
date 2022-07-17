import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC15Xegim0wxPm1XPiF1Gos8oer0pP5P_M",
  authDomain: "chat-room-c7bf2.firebaseapp.com",
  projectId: "chat-room-c7bf2",
  storageBucket: "chat-room-c7bf2.appspot.com",
  messagingSenderId: "621863439127",
  appId: "1:621863439127:web:8c586d57f427719c458552",
  measurementId: "G-RQGHB6SNBL",
};
const app = initializeApp(firebaseConfig);
async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const {user} = signInWithPopup(auth,provider)
    return { uid: user.uid, displayName: user.displayName };
  } catch (e) {
    console.log("error", e);
  }
}
