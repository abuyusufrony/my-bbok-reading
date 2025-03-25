import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { getInLocal, setWish } from '../../Utilities/SetDb';

const BookDetail = () => {


    const { bookId, image, totalPages } = useParams()
    console.log(bookId)
    const data = useLoaderData()
    console.log(data)
    const id = parseInt(bookId)
    console.log(typeof id, typeof data[0].bookId, typeof bookId)
    const matchbooks = data.find(d => d.bookId === id)
    console.log(matchbooks)
    const { bookId: currentBookId, bookName, image: currentImage, author, category, review, tags } = matchbooks



    // this console are used for finding bug........
    // console.log("Type of bookid in data:", typeof data[0].bookId);
    // const matchedBook = data.find(book => book.bookId === id); // Ensure correct type comparison
    // console.log("Matched Book:", matchedBook);



    // const matchedBook = data.find(book => book.bookid === id); // Ensure correct type comparison
    // console.log("Matched Book:", matchedBook);
    // console.log("Full data array:", data);
    // console.log("First book object:", data?.[0]);
    // console.log("Type of bookid in data:", typeof data?.[0]?.bookid);
    // console.log("Type of id from URL:", typeof id);
    // console.log("ID from URL:", id);

    // onclick Function are 

    const markAsRead = (id) => {
        getInLocal(id)

    }
    const handlewish = (id) => {
        setWish(id)

    }








    return (
        <div>
            {/* <h2>Book details {bookId} </h2> */}
            {/* <p className='text-6xl  text-amber-300'> Work hard unstill sucess </p>
            <p className='text-6xl mb-5  text-amber-300'>Stay focus Rony </p> */}

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={currentImage}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold py-3.5">{bookName}</h1>
                        <p> By: {author}</p>
                        <div className='border-b-1'></div>
                        <p className='py-6'>{category}</p>
                        <div className='border-b-1'></div>
                        <p className="py-6">


                            {review}
                        </p>
                        <div className='flex  py-4   gap-3'>
                            {
                                tags.map((t, index) => <button key={index} className="btn btn-sm bg-green-200 text-[#23BE0A] rounded-2xl">  {t}</button>)
                            }
                        </div>
                        <div className='mr-2.5'>
                            <button onClick={() => markAsRead(bookId)} className="btn btn-primary mr-2.5 hover:bg-amber-800"> Mark Read</button>
                            <button onClick={() => handlewish(bookId)} className="btn btn-primary"> Add Wishlisted</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
