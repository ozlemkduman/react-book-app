import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAuthor, getBook, getCouple } from "../services/firebase";
import { useContext, useState } from "react";
import { MainContext } from "../App";
import { addCollectionAuthor, addCollectionBook, addCollectionCouple } from "../services/addData";


export default function Panel() {

    const data = useContext(MainContext)
    const [bookCount, setBookCount] = useState(0)
    const [coupleCount, setCoupleCount] = useState(0)

    useEffect(() => {
        _getBook()
    }, [bookCount])

    useEffect(() => {
        _getAuthor()
    }, [bookCount])

    useEffect(() => {
        _getCouple();
    }, [coupleCount])


    function addBook(e) {
        e.preventDefault();
        if (data.book !== "") {
            addCollectionBook(data.book); //firebasede collection a kaydoluyor
            data.setBook("")
            setBookCount(prev => prev + 1)
            console.log(bookCount, data.book);
        }
    }

    function addAuthor(e) {
        e.preventDefault();
        if (data.author !== "") {
            addCollectionAuthor(data.author) //firebasede collection a kaydoluyor
            data.setAuthor("");
            setBookCount(prev => prev + 1)
            console.log(bookCount, data.author);
        }
    }

    function addCouple(e) {
        e.preventDefault();
        if (data.selectedBook && data.selectedAuthor) {
            addCollectionCouple(data.selectedBook, data.selectedAuthor)
            setCoupleCount(prev => prev + 1);
            console.log(coupleCount, data.couple);
        }
    }

    async function _getBook() {
        data.setBooks(await getBook());
    }
    async function _getAuthor() {
        data.setAuthors(await getAuthor())
    }

    async function _getCouple() {
        data.setCouple(await getCouple())

    }

    return (
        <>
            <div className="container">
                <Navbar />
                
                <div className="addMain">
                    <div className="addBook" >
                        <form action="submit">
                            <label htmlFor="book">Kitap İsmi Giriniz</label>
                            <input id="book" type="text"
                                placeholder="Kitap ismi girin"
                                value={data.book}
                                onChange={(e) => { data.setBook(e.target.value) }}
                            />
                            <br />
                            <button onClick={addBook} >Gönder</button>
                        </form>
                    </div>

                    <div>
                    </div>
                    <div className="addAuthor">
                        <form action="submit">
                            <label htmlFor="author">Yazar İsmi Giriniz</label>
                            <input id="author" type="text"
                                placeholder="Yazar ismi girin"
                                value={data.author}
                                onChange={(e) => { data.setAuthor(e.target.value) }}
                            />
                            <br />
                            <button onClick={addAuthor} >Gönder</button>
                        </form>
                    </div>
                </div>
                <div className="coupleBoth">
                    <form action="">
                        <label htmlFor="books">Kitap Seçiniz</label>
                        <select id="books" name="books" onChange={(e) => data.setSelectedBook(e.target.value)} value={data.selectedBook}>
                            {data.books && data.books.map((item, index) => <option key={index}>{item.name.toUpperCase()}</option>)}
                        </select>
                        <br />
                        <label htmlFor="authors">Yazar Seçiniz</label>
                        <select id="authors" name="authors" onChange={(e) => data.setSelectedAuthor(e.target.value)} value={data.selectedAuthor}>
                            {data.authors && data.authors.map((item, index) => <option key={index}>{item.name.toUpperCase()}</option>)}
                        </select>
                        <br />
                        <button onClick={addCouple} >Eşle</button>
                    </form>
                    <form>
                        {data.couple.map((item, index) => <p key={index}>{item.book} - {item.author}</p>)}
                    </form>
                </div>
            </div>

        </>
    )
}

