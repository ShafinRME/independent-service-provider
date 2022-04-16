// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZAobunN_pOKVNaEHMqi0lly09UDPzUr8",
    authDomain: "einstein-school-cbbd2.firebaseapp.com",
    projectId: "einstein-school-cbbd2",
    storageBucket: "einstein-school-cbbd2.appspot.com",
    messagingSenderId: "20148240033",
    appId: "1:20148240033:web:85d896c7ddb647136d7ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;