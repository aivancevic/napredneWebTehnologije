import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const BookScreen = ({match}) => {
    const [book, setBook] = useState([]);

    useEffect(() => {
      axios.get(`/api/books/${match.params.id}`)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <img
          src={book.image}
          alt={book.title}
          className="card-img-top img-fluid"
          style={{ maxWidth: '300px', margin: '0 auto' }} // Adjust the max width as needed
        />
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <h5 className="card-subtitle mb-2 text-muted">{book.author}</h5>
          <p className="card-text">{book.description}</p>
          <p className="card-text">Cijena: <strong>{book.price} €</strong></p>
          <p className="card-text">
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <Link to={`/`} className="btn btn-primary">
                <span>Natrag</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookScreen;
