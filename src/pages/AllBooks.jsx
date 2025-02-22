import { useContext } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { MainContext } from "../App";



export default function AllBooks() {
  const data = useContext(MainContext)
  console.log(data.couple);
  return (
    <>
          <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-12 wrap">
            {data.couple.map((item, index) => <BookCard key={index} item={item} />)}
          </div>
        </div>
      </div>
    </>
  )
}
