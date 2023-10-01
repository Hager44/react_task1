
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBfksgFL6Eu_LvZYOXrNdiDxjcFGuvLj_8",
  authDomain: "travel-233c4.firebaseapp.com",
  projectId: "travel-233c4",
  storageBucket: "travel-233c4.appspot.com",
  messagingSenderId: "319112702462",
  appId: "1:319112702462:web:49541f86b3a08677be38af",
  measurementId: "G-L297HNM7VM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);