
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAElfcoRZp7C253Xq7TIk2kPICrdxaYhjE",
  authDomain: "travelreact-56a55.firebaseapp.com",
  projectId: "travelreact-56a55",
  storageBucket: "travelreact-56a55.appspot.com",
  messagingSenderId: "193133479108",
  appId: "1:193133479108:web:3eedf93f2f5670d84cb591",
  measurementId: "G-749MYFRSFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);