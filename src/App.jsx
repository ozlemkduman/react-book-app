
import SignIn from "./pages/SignIn"
import Navbar from "./components/Navbar"
import SiteRoutes from "./SiteRoutes"
import "../src/styles/App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "firebase/firestore";
import { createContext, useState } from "react"
export const MainContext = createContext();
function App() {


  const [uid, setUid] = useState(null);
  const [author, setAuthor] = useState(""); //tek yazar
  const [book, setBook] = useState(""); //tek kitap
  const [books, setBooks] = useState([]); //eklenen kitaplar
  const [authors, setAuthors] = useState([]) //eklenen yazarlar
  const [couple, setCouple] = useState([])
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [selectedBook, setSelectedBook] = useState("")
  const [selectedAuthor, setSelectedAuthor] = useState("")
  const data = {
    uid,
    setUid,
    author,
    setAuthor,
    book,
    setBook,
    books,
    setBooks,
    authors,
    setAuthors,
    firstname,
    setFirstname,
    lastname,
    setLastname,
    selectedBook,
    setSelectedBook,
    selectedAuthor,
    setSelectedAuthor,
    couple,
    setCouple
  }
  return (
    <>
      <MainContext.Provider value={data}>
        <div className="background">
          <SiteRoutes />
          
        </div>
      </MainContext.Provider>
    </>
  )
}

export default App
