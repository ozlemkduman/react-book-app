import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useContext } from "react";
import { MainContext } from "../App";




async function addCollectionUser(userUid) {
    const data = useContext(MainContext)


    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: data.firstname,
            last: data.lastname,
            uid: userUid
        });

        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function addCollectionBook(bookName) {

    try {

        const docRef = await addDoc(collection(db, "books"), {
            name: bookName,
            bookUid: ""
        })

        const updateRef = doc(db, "books", docRef.id);
        await updateDoc(updateRef, {
            bookUid: docRef.id
        });
        return docRef

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function addCollectionAuthor(authorName) {
    try {

        const docRef = await addDoc(collection(db, "authors"), {
            name: authorName,
            authorUid: ""
        })
        const updateRef = doc(db, "authors", docRef.id);
        await updateDoc(updateRef, {
            authorUid: docRef.id 
        });
        return docRef;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function addCollectionCouple(selectedBook,selectedAuthor) {
    try {
        const docRef = await addDoc(collection(db, "couple"), {
            book: selectedBook,
            author:selectedAuthor,
            coupleId: ""
        })
        const updateRef = doc(db, "couple", docRef.id);
        await updateDoc(updateRef, {
            coupleId: docRef.id
        });
        return docRef;

    } catch (e) {
        console.error(e);
    }
}

export { addCollectionUser, addCollectionBook, addCollectionAuthor, addCollectionCouple }