// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA1aZnmyLfXmQ4MgBcBYrA4lZI5OsBrGn4",
//   authDomain: "react-firebase-chat-7864d.firebaseapp.com",
//   projectId: "react-firebase-chat-7864d",
//   storageBucket: "react-firebase-chat-7864d.appspot.com",
//   messagingSenderId: "1077827778114",
//   appId: "1:1077827778114:web:35323c22bae7e85b619fdb",
//   measurementId: "G-E2ST0SX720"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Вставьте вашу конфигурацию Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA1aZnmyLfXmQ4MgBcBYrA4lZI5OsBrGn4",
    authDomain: "react-firebase-chat-7864d.firebaseapp.com",
    projectId: "react-firebase-chat-7864d",
    storageBucket: "react-firebase-chat-7864d.appspot.com",
    messagingSenderId: "1077827778114",
    appId: "1:1077827778114:web:35323c22bae7e85b619fdb",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Realtime Database
const database = getDatabase(app);

// Экспорт объекта database
export { database };
