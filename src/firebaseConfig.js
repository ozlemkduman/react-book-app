import { initializeApp } from "firebase/app";
import { getFirestore,  } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDA_gE9P4xvkdxzKxP6UTQkCApTMbFhcLU",
    authDomain: "newbook-63174.firebaseapp.com",
    projectId: "newbook-63174",
    storageBucket: "newbook-63174.appspot.com",
    messagingSenderId: "313559550567",
    appId: "1:313559550567:web:bd9448a73b6dae034aa2c2",
    measurementId: "G-79LSP27GBV"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db,app}
             
