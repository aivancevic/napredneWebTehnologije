import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Publisher = ({publishers}) => {
  return (
    <div className="container mt-5">
    <h1 className="text-center">Welcome to the publisher list page</h1>
    <div className="row mt-4">
      {publishers.map((publisher, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{publisher.name}</h5>
              <Link to={`/publisher/${publisher._id}`} className="btn btn-primary">
                <span>Detalji</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Publisher;
