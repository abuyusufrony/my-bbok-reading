import React from 'react';

const Book2 = ({ itembooks }) => {
    const { bookName, author, image } = itembooks
    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm p-8   ">
                <figure className='bg-base-100 py-6'>
                    <img className='h-[196px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book2;