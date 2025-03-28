import React, { useEffect, useState } from 'react';
import Book2 from '../Book/Book2';


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl font-bold text-center"> Books </h2>
            <p> total books are {books.length}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    books.map(b => <Book2 itembooks={b}></Book2>)
                }
            </div>



        </div>
    );
};

export default Books;


