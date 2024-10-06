import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA1aZnmyLfXmQ4MgBcBYrA4lZI5OsBrGn4",
    authDomain: "react-firebase-chat-7864d.firebaseapp.com",
    projectId: "react-firebase-chat-7864d",
    storageBucket: "react-firebase-chat-7864d.appspot.com",
    messagingSenderId: "1077827778114",
    appId: "1:1077827778114:web:35323c22bae7e85b619fdb",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
