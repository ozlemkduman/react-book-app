import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div id="navbar">
                <NavLink className="navLink" to="/">Ana Sayfa</NavLink>
                <NavLink className="navLink" to="/all-books">Kitaplar</NavLink>
                <NavLink className="navLink" to="/sign-in">Üye Ol</NavLink>
                <NavLink className="navLink" to="/log-in">Giriş Yap</NavLink>
            </div>
        </>
    )
}