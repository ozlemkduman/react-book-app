import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllBooks from "./pages/AllBooks";
import Panel from "./pages/Panel"

export default function SiteRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/all-books" element={<AllBooks />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/log-in" element={<Login />} />
                <Route path="/admin" element={<Panel />} />

            </Routes>
        </>
    )
}