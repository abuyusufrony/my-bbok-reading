import rating from 'daisyui/components/rating';
import React from 'react';
import { FaStar } from "react-icons/fa6";



const Book2 = ({ itembooks }) => {
    const { bookName, author, image, category, tags, rating } = itembooks
    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm p-8   ">
                <figure className='bg-base-100 py-6 rounded-2xl'>
                    <img className='h-[196px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className='flex justify-center'>
                    {
                        tags.map(t => <button className="btn btn-sm bg-green-200 text-green-500">{t}</button>)
                    }
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>

                    </h2>
                    <p className=''>Written By: {author}</p>
                    <div className='border-b-2 border-dotted'></div>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline"> {category}</div>
                        <div className="badge badge-outline">{rating}   Star    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book2;

// import React from 'react';

// const Book2 = ({ itembooks }) => {
//     const { bookName, author, image, tags = [] } = itembooks; // ✅ Ensure tags is an array

//     return (
//         <div>
//             <div className="card bg-base-300 w-96 shadow-sm p-8">
//                 <figure className='bg-base-100 py-6 rounded-2xl'>
//                     <img className='h-[196px]'
//                         src={image}
//                         alt={bookName} />
//                 </figure>
//                 <div className='flex justify-center'>
//                     {
//                         tags.map((t, index) => (
//                             <button key={index} className="btn btn-sm bg-green-200 text-green-500">
//                                 {t}
//                             </button>
//                         ))
//                     }
//                 </div>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         {bookName}
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p className=''>Written By: {author}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Book2;
