import { useContext, useState } from "react"
import { createUser } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addCollectionUser } from "../services/addData";
import { MainContext } from "../App";

export default function SignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { firstname, setFirstname, lastname, setLastname } = useContext(MainContext)

    let user;

    const onSubmitForCreate = async (e) => {

        try {
            e.preventDefault();
            user = await createUser(email, password);
            navigate("/");
            console.log(user);
            console.log(user.uid);
            addCollectionUser(user.uid)
            return user
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }

    return (
        <>

            <Navbar />
            <div className="formArea">
                <h2>Kayıt Ol</h2>
                <form action="">
                    <label htmlFor="emailName">E-mail Giriniz </label>
                    <input type="text"
                        value={email}
                        name="emailName"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="">İsim  Giriniz </label>
                    <input type="text"
                        value={firstname}
                        placeholder="İsim giriniz"
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor=""> Soyisim Giriniz </label>
                    <input type="text"
                        value={lastname}
                        placeholder="Soyisim giriniz"
                        onChange={(e) => setLastname(e.target.value)}
                    />
                    <label htmlFor="">Parola Giriniz </label>
                    <input type="password"
                        value={password}
                        placeholder="Şifre"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="submitButton" onClick={onSubmitForCreate}> Üye Ol</button>
                </form>
            </div>
        </>
    )
}