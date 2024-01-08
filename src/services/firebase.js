import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, } from "../firebaseConfig";
import { collection, getDocs, getFirestore,  } from "firebase/firestore";

const auth = getAuth(app);
let user;
const db = getFirestore(app);

async function createUser(email, password) {

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });

  return user
}
async function loginUser(email, password) {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  return user;
}

/*
async function getUserDataFromFirestore(uid) {
  try {
    const docRef = collection(db, "users",);
    const q = query(docRef, where("uid", "==", uid))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {

      console.log(doc.id, " => ", doc.data());
    });


  } catch (error) {
    console.log(error);
  }
}
*/

async function getBook() {
  try {
    const docRef = collection(db, "books");
    const querySnapshot = await getDocs(docRef);
    const _books = [{
      name: "Kitap Seçiniz"
    }];
    querySnapshot.forEach((doc) => {
      _books.push({ id: doc.id, ...doc.data() });
    });
    console.log("_books dizisi: ", _books);
    return _books;
  } catch (e) {
    console.log(e);
  }
}

async function getAuthor() {
  try {
    const docRef = collection(db, "authors");
    const querySnapshot = await getDocs(docRef);
    const _authors = [{
      name: "Yazar Seçiniz"
    }];
    querySnapshot.forEach((doc) => {
      _authors.push({ id: doc.id, ...doc.data() });
    });
    console.log("_authors dizisi: ", _authors);
    return _authors;
  } catch (e) {
    console.log(e);
  }
}

async function getCouple() {
  try {
    const docRef = collection(db, "couple");
    const querySnapshot = await getDocs(docRef);
    const _couple = [];
    querySnapshot.forEach((doc) => {
      _couple.push({ id: doc.id, ...doc.data() })
    })
    return _couple
  } catch (error) {
    console.error(error)
  }
}



export { createUser, loginUser, getBook, getAuthor, getCouple } 
