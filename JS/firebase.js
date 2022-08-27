const firebaseConfig = {
    apiKey: "AIzaSyBNEchCE1A-FpuI0X8Zoqr2vQTBmImYFvs",
    authDomain: "contactsbook-f005e.firebaseapp.com",
    databaseURL: "https://contactsbook-f005e-default-rtdb.firebaseio.com/",
    projectId: "contactsbook-f005e",
    storageBucket: "contactsbook-f005e.appspot.com",
    messagingSenderId: "537273273378",
    appId: "1:537273273378:web:eb04bb53339997ec4d4e7b",
    measurementId: "G-62483HJ2ET"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.database().ref("contacts");

export{auth};
export{db};
