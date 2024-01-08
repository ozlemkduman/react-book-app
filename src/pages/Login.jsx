import { useContext, useState } from "react"
import { loginUser } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import currentStateUser from "../services/getAuth";
import { getAuth } from "firebase/auth";
import { app } from "../firebaseConfig";
import { MainContext } from "../App";

export default function Login() {
   const navigate = useNavigate()
   let user;
   let userEmail = "";
   let userUid = "";

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { setUid } = useContext(MainContext)

   const onSubmitSignIn = async (e) => {
      e.preventDefault();
      user = await loginUser(email, password);

      const auth = getAuth(app);
      const userCurrent = auth.currentUser
      console.log(userCurrent.displayName);

      if (user !== null) {
         userEmail = user.email;
         userUid = user.uid;
         console.log(user, userEmail, userUid);
         console.log(user);
        localStorage.setItem("uid",user.uid)
         setUid(userUid)




         //user kontrolü ile yönlendirme
         if (userEmail === "ozlem@ozlem.com"|| "ferda@ferda.com") {
            navigate("/admin")
         } else {
            navigate("/");
         }
      }
   }

   return (
      <>
         <Navbar />
         <div className="formArea">
            <h2>Giriş Yap</h2>

            <form action="submit">
               <label htmlFor="emailName">E-mail Giriniz </label>
               <input type="text"
                  placeholder="email"
                  onChange={(e) => { setEmail(e.target.value) }}
               />
               <label htmlFor="emailName">Parola Giriniz </label>
               <input type="password"
                  placeholder="password"
                  onChange={(e) => { setPassword(e.target.value) }}
               />
               <button className="submitButton" onClick={onSubmitSignIn}>Giriş Yap</button>
            </form>
         </div>
      </>
   )
}