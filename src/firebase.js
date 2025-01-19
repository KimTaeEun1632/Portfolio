import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFZ1QjblEsbUZywBLRgagPZfszKcGEgOQ",
  authDomain: "kimtaeeun-portfolio.firebaseapp.com",
  projectId: "kimtaeeun-portfolio",
  storageBucket: "kimtaeeun-portfolio.firebasestorage.app",
  messagingSenderId: "1091104886566",
  appId: "1:1091104886566:web:c0d2055dc11e53983e7be7",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);
