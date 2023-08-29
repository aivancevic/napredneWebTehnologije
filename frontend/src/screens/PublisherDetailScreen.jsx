import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const PublisherDetailScreen = ({match}) => {
    const [publisher, setPublisher] = useState([]);

    useEffect(() => {
      axios.get(`/api/publisher/${match.params.id}`)
        .then(response => {
          setPublisher(response.data);
        })
        .catch(error => {
          console.error('Error fetching publisher:', error);
        });
    }, []);
  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h2 className="card-title">{publisher.name}</h2>
          <h5 className="card-subtitle mb-2 text-muted">{publisher.address}</h5>
          <p className="card-text">{publisher.contact}</p>
          <p className="card-text"> {publisher.email}</p>
          <p className="card-text">
          </p>
          <Link to={`/publisher`} className="btn btn-primary">
                <span>Natrag</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PublisherDetailScreen;
