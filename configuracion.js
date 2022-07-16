//import firebase from "firebase/app";
//import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBYi80DeXdbGkZFJTPEvLrrr9D4oH_Pmdw",
  authDomain: "calculadora-45d3f.firebaseapp.com",
  projectId: "calculadora-45d3f",
  storageBucket: "calculadora-45d3f.appspot.com",
  messagingSenderId: "1052880653680",
  appId: "1:1052880653680:web:5bef88fb0df8450efe13b5",


    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
