import React, { useState } from 'react'

const books = [{id:1,title:"Divina Commedia"}, {id:2,title:"I Promessi Sposi"}, {id:3,title:"I Malavoglia"}];
const Biblioteca = () => {

    const[books,setBooks]=useState(libri)

    const addBook = (title) => {
        setBooks([
            ...books,
            {id:Date.now(),title}
        ])
    };

return (
    <>
        <h2>Biblioteca</h2>
        <BookList books={books}></BookList>
        <AddBookForm onAddBook={addBook}></AddBookForm>    
    </>
    )
}; 


const BookList = ({books}) => {
    return (
        <div>
            {books.map(b => {
                return (<p>{b.title}</p>)
            })
            }
        </div>
    );
};
        

const AddBookForm = ({onAddBook}) => {
    return (
        <div>
            <button onClick={onAddBook} className="btn btn.primary">Aggiungi libro</button>
        </div>
    )
}

export default Biblioteca