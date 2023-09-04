import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Book = ({books}) => {
  const [role, setRole] = useState();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [])

  return (
    <div className="container mt-5">
    <h1 className="text-center">Welcome to the Book Store!</h1>
    <div className="row mt-4">
      {books.map((book, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <img src={book.image} alt={book.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="card-text">{book.author}</p>
              <p className="card-text">{book.publisher}</p>
              { role == "admin" ? (<>
                <Link to={`/book/${book._id}`} className="btn btn-primary">
                  <span>Detalji</span>
                </Link>
                <Link to={`/bookedit/${book._id}`} className="btn btn-primary">
                  <span>Uredi</span>
                </Link>
              </>) : (<Link to={`/book/${book._id}`} className="btn btn-primary">
                  <span>Detalji</span>
                </Link>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Book;
