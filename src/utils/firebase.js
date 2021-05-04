import firebase from "firebase/app";
import "firebase/database";

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     databaseURL: process.env.REACT_APP_FIREBASE_BD_URL,

// }
var firebaseConfig = {
    apiKey: "AIzaSyAY2ehVPt1Ujk3ZmjSm1a3ly1KBCtNuldc",
    authDomain: "consolidata-final.firebaseapp.com",
    projectId: "consolidata-final",
    storageBucket: "consolidata-final.appspot.com",
    messagingSenderId: "145458404095",
    appId: "1:145458404095:web:58d664321bbfc9044b8aca",
    databaseURL: "https://consolidata-final-default-rtdb.firebaseio.com/",
  };

const firebase_app = firebase.initializeApp(firebaseConfig)

export const fireDB = firebase_app.database();
export default firebase_app;