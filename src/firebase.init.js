// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI2DmkkSE5rX3_vecbmRHnoDv-K5ItkJQ",
  authDomain: "inventory-management-accca.firebaseapp.com",
  projectId: "inventory-management-accca",
  storageBucket: "inventory-management-accca.appspot.com",
  messagingSenderId: "207918669909",
  appId: "1:207918669909:web:9ac1eeffb7ea24d59334dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;