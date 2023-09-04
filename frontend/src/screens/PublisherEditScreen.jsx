import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const PublisherEditScreen = ({match}) => {
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [contact, setContact] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    useEffect(() => {
        axios.get(`/api/publisher/${match.params.id}`)
        .then(response => {
            setName(response.data.name);
            setAddress(response.data.address);
            setContact(response.data.contact);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
        })
        .catch(error => {
          console.error('Error fetching publisher:', error);
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.put(`/api/publisher/${match.params.id}`, { 
                name: name,
                address: address, 
                contact: contact,
                email: email,
                phoneNumber: phoneNumber,
               });  
            console.log('Change successful:', response.data);
        } catch (error) {
            console.error('Error Change:', error);
        }
      };
    
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Publisher detail</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="address" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">Contact</label>
                  <input type="contact" className="form-control" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                  <input type="phoneNumber" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublisherEditScreen;
