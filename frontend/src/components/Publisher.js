import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Publisher = ({ publishers, match }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    setRole(localStorage.getItem('role'));
  }, []);

  const handleDelete = async (publisherId) => {
    try {
      await axios.delete(`/api/publisher/${publisherId}`);
      console.log('Izbrisan');
      // Optionally, you can update the list of publishers in the component's state or re-fetch data.
    } catch (error) {
      console.error('Cannot delete publisher', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the publisher list page</h1>
      <div className="row mt-4">
        {publishers.map((publisher) => (
          <div key={publisher._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{publisher.name}</h5>
                <p className="card-text">{publisher.contact}</p>
                <p className="card-text">{publisher.address}</p>
                {role === 'admin' && (
                  <>
                    <Link to={`/publisher/${publisher._id}`} className="btn btn-primary">
                      <span>Detalji</span>
                    </Link>
                    <Link to={`/publisheredit/${publisher._id}`} className="btn btn-primary">
                      <span>Uredi</span>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(publisher._id)}
                    >
                      <span>Izbriši</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publisher;
