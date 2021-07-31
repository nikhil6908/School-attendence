 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA8PUTYgOhu2XzcalQWVUhxrFHYDFzi-I4",
    authDomain: "attendence-7b92b.firebaseapp.com",
    databaseURL: "https://attendence-7b92b-default-rtdb.firebaseio.com",
    projectId: "attendence-7b92b",
    storageBucket: "attendence-7b92b.appspot.com",
    messagingSenderId: "429005721864",
    appId: "1:429005721864:web:4e4f0151246bb5a12e9cbd"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();

 
 

 
 

  