// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc045AI4e6CeTSVUdU-9WQu0PxlOKpnZg",
  authDomain: "react-app-cursos-c2cd7.firebaseapp.com",
  projectId: "react-app-cursos-c2cd7",
  storageBucket: "react-app-cursos-c2cd7.appspot.com",
  messagingSenderId: "434888003541",
  appId: "1:434888003541:web:ea550932a59d4b6693b75c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
