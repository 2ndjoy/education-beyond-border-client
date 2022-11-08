// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVi84TbQK5Iye-ToXP8RL7MEE6MDg6XW4",
    authDomain: "education-beyondborder.firebaseapp.com",
    projectId: "education-beyondborder",
    storageBucket: "education-beyondborder.appspot.com",
    messagingSenderId: "246464212492",
    appId: "1:246464212492:web:1b22d74d51b1b83fdbc829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;