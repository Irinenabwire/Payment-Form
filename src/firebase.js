import React from "react";
import firebase from "firebase";
import 'firebase/firestore';

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCfIEhkjwO7DL4xsC92pLOjjltGUB2t93k",
        authDomain: "lipanampesa-99f1e.firebaseapp.com",
        projectId: "lipanampesa-99f1e",
        storageBucket: "lipanampesa-99f1e.appspot.com",
        messagingSenderId: "306100539529",
        appId: "1:306100539529:web:2e64846fd10b4f0888f658" // Your firebase credentials
});

var db = firebaseApp.firestore();

export { db };



// import firebase from 'firebase';

// var firebaseApp= firebase.initializeApp({
    
//         apiKey: "AIzaSyCfIEhkjwO7DL4xsC92pLOjjltGUB2t93k",
//         authDomain: "lipanampesa-99f1e.firebaseapp.com",
//         projectId: "lipanampesa-99f1e",
//         storageBucket: "lipanampesa-99f1e.appspot.com",
//         messagingSenderId: "306100539529",
//         appId: "1:306100539529:web:2e64846fd10b4f0888f658"
   
     
// });

// var db=firebase.firestore();
