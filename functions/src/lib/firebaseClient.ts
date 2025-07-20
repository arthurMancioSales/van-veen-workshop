import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSki5TfJfaa4r_WKe3OeYa9TOpbrr3JMM",
  authDomain: "van-veen-workshop.firebaseapp.com",
  projectId: "van-veen-workshop",
  storageBucket: "van-veen-workshop.firebasestorage.app",
  messagingSenderId: "506490647476",
  appId: "1:506490647476:web:af7557258fecc56b9278e1",
  measurementId: "G-SXJZWLBFMJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
