import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

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

export const db = getDatabase(app);
