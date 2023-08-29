import { useEffect, useState} from "react";
import axios from 'axios';
import React from 'react';
import Books from '../components/Book';

const HomeScreen = () => {
    const [booksData, setBooks] = useState([]);

    useEffect(() => {
      axios.get('/api/books')
        .then(response => {
          setBooks(response.data);
          console.log(booksData)
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);

  return (
    <Books books = {booksData} />
  );
};

export default HomeScreen;
