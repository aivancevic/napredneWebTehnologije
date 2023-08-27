import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const BookScreen = ({match}) => {
    const [book, setBook] = useState([]);

    useEffect(() => {
      axios.get(`/books/${match.params.id}`)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);
  return (
    <div>
      Book screen
      <h1>{book.name}</h1>
      <h3>{book.author}</h3>
    </div>
  )
}

export default BookScreen;
