import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let uid
function currentStateUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
             uid = user.uid;

        } else {
            
        }
    });
    return uid
}


export default currentStateUser
