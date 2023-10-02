
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDuFHFYk_YY3ardRbFLG_aRhTUkpmRGEQ4",
  authDomain: "travel-1313c.firebaseapp.com",
  projectId: "travel-1313c",
  storageBucket: "travel-1313c.appspot.com",
  messagingSenderId: "302022006705",
  appId: "1:302022006705:web:90f960aef899076be44f90",
  measurementId: "G-67N9PPJS88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);