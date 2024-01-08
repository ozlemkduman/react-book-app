
import React,{useEffect, useState} from "react";
import "./App.css";

const MatchAuthorBook = () => {

    const [authors,setAuthors] = useState([]);
    const [books, setBooks] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState("");
    const [selectedBook, setSelectedBook] = useState("");
    const [showAltert, setShowAlert] = useState(false)

    useEffect(()=> {
        getAllBooks();
        getAllAuthors();
    },[])

    useEffect(()=>{
        console.log(selectedBook);
        console.log(selectedAuthor);
    },[selectedBook,selectedAuthor])

    async function getAllBooks() {
        try {
            const response = await fetch("http://localhost:3000/api/book", {
                method: "GET"
            })
            if(response) {
                const data = await response.json()
                setBooks(data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllAuthors() {
        try {
            const response = await fetch("http://localhost:3000/api/author", {
                method: "GET"
            })
            if(response) {
                const data = await response.json()
                setAuthors(data)
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function match(){
        console.log("Eşleşme : " + selectedAuthor + " " + selectedBook );
        try {
            const response = await fetch(`http://localhost:3000/api/match/${selectedAuthor}/${selectedBook}`,{
                method : "POST",
            }).then(()=> {
                setShowAlert(true);
              
                setTimeout(() => {
                  setShowAlert(false);
               }, 1000);
               setSelectedAuthor("");
               setSelectedBook("");
              });
            if(response){
                console.log("Maç eşleşti.");
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="match-author-select-container">
         <div className={`modal ${showAltert ? "active" : ""}`}>
        <div className="modal-content">Book and Author Matched.</div>
      </div>
        <h2>Match Book vs Author</h2>
      <div className="match-select">
        <label>Author</label>
        <select value={selectedAuthor} onChange={ (e)=> {if(e.target.value !== null) setSelectedAuthor(e.target.value)  }}>
        <option value={""}>Select an author</option>
        {authors && authors.map((item) => {
            return <option value={item.id} key={item.id}>{item.name}</option>
         })}
        </select>
      </div>

      <div className="match-select">
        <label>Book</label>
        <select value={selectedBook} onChange={(e)=> {if(e.target.value !== null) setSelectedBook(e.target.value)  }}>
        <option value={""}>Select a  book</option>
         {books && books.map((item) => {
            return <option value={item.id} key={item.id}>{item.name}</option>
         })}
        </select>
        </div>
         
      
      <div className="match-button-container">
      {selectedAuthor < 1 || selectedBook < 1  ? "" :  <button className="match-button" onClick={()=> match()}>Match</button>
       }
      </div>
      
    </div>
  );
};

export default MatchAuthorBook;


