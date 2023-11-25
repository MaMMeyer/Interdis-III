// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/Storage";

const firebaseConfig = {
  apiKey: "AIzaSyCefvntrhDtDsbKA9adu6lr26tk2XtK0_M",
  authDomain: "checklistapp-mmeyer.firebaseapp.com",
  projectId: "checklistapp-mmeyer",
  storageBucket: "checklistapp-mmeyer.appspot.com",
  messagingSenderId: "882217139766",
  appId: "1:882217139766:web:61fe960f22874f93162297",
  measurementId: "G-KYDNRHCND1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)