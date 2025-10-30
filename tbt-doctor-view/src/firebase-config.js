// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKabZLaAaWBfOTfihLtixmIOqVo0yz5d8",
  authDomain: "osucomprop4.firebaseapp.com",
  projectId: "osucomprop4",
  storageBucket: "osucomprop4.firebasestorage.app",
  messagingSenderId: "677045339633",
  appId: "1:677045339633:ios:fe0b50b043dca92a643050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = getAuth(app);
