import { useEffect, useState} from "react";
import axios from 'axios';
import React from 'react';
import Publisher from '../components/Publisher.js';
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

const PublishersScreen = () => {
    const [publisherData, setPublishers] = useState([]);

    useEffect(() => {
      axios.get('/api/publisher')
        .then(response => {
          setPublishers(response.data);
        })
        .catch(error => {
          console.error('Error fetching publishers:', error);
        });
    }, []);

    const [role, setRole] = useState();

    useEffect(() => {
      setRole(localStorage.getItem("role"));
    }, [])

  return (
    <div>
      <Publisher publishers={publisherData} />
      { role === "admin" ? (<>
      <Link to="/create">
        <div style = { {textAlign: 'center' }}>
          <button className="btn btn-primary">Dodaj</button>
        </div>
      </Link>
     </>) : ""}
    </div>
  );
};

export default PublishersScreen;
