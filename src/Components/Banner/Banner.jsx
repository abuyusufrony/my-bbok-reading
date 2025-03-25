import React from 'react';
import book from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={book}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>

                        <button className="btn btn-primary mt-9 bg-[#23BE0A] text-xl">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;