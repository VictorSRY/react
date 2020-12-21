import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAMQgC0CGeLJvdcrbqmaOSmB_5-GdCQiC4",
    authDomain: "react-burger-app-e051f.firebaseapp.com",
    databaseURL: "https://react-burger-app-e051f-default-rtdb.firebaseio.com",
    projectId: "react-burger-app-e051f",
    storageBucket: "react-burger-app-e051f.appspot.com",
    messagingSenderId: "39750554911",
    appId: "1:39750554911:web:7ba4094cb93269f8e28c2a",
    measurementId: "G-S5S55ZDP0T"
  };

  // Initialize Firebase
export const defaultFirebase=firebase.initializeApp(firebaseConfig);
