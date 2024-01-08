export default function BookCard({item}) {
    return (
        <>
            <div className="cardContainer">
                <div className="card">
                    <img className="cardImg" src="https://picsum.photos/id/25/200/300
" alt="" />
                    <p className="cardTitle"> {item.book}</p>
                    <p className="cardAuthor"> {item.author}</p>
                    <p className="cardInfo"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, doloremque culpa voluptas beatae voluptatibus animi quia aut repudiandae eligendi sunt.</p>
                </div>
            </div>
        </>
    )
}


