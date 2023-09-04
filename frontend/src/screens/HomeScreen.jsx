import { useEffect, useState} from "react";
import axios from 'axios';
import React from 'react';
import Books from '../components/Book';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HomeScreen = () => {
    const [booksData, setBooks] = useState([]);

    useEffect(() => {
      axios.get('/api/books')
        .then(response => {
          setBooks(response.data);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }, []);

    const [role, setRole] = useState();

    useEffect(() => {
      setRole(localStorage.getItem("role"));
    }, [])

  return (
    <div>
       <Books books = {booksData} />
      { role === "admin" ? (<>
      <Link to ="/books/create">
        <div style = { {textAlign: 'center' }}>
          <button className="btn btn-primary">Dodaj</button>
        </div>
      </Link>
     </>) : ""}
    </div>
  );
};


export default HomeScreen;
