import { useEffect, useState} from "react";
import axios from 'axios';
import React from 'react';
import Books from '../components/Books';

const HomeScreen = () => {
    const [booksData, setBooks] = useState([]);

    useEffect(() => {
      axios.get('/books')
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);

  return (
//     <div className="container mt-5">
//     <h1 className="text-center">Welcome to the Book Store!</h1>
//     <div className="row mt-4">
//       {books.map((book, index) => (
//         <div key={index} className="col-md-4 mb-4">
//           <div className="card">
//             <img src={book.image} alt={book.title} className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">{book.title}</h5>
//               <p className="card-text">{book.author}</p>
//               {/* Other book details */}
//               <a href={`/book/${index}`} className="btn btn-primary">
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
<Books books = {booksData} />
  );
};

export default HomeScreen;
