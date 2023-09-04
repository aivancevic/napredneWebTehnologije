import React, {useState} from 'react'
import axios from 'axios';

const PublisherAddScreen = () => {
  const [name, setName ] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail ] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
          await axios.post(`/api/publisher/create`, { 
            name: name,
            address: address, 
            contact: contact,
            email: email,
            phoneNumber: phoneNumber,
           });  

        setSubmitMessage('Submit successful!');

    } catch (error) {
        setSubmitMessage('Submit failed. Please try again.');
    }
  };
    
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Add publisher</div>
            <div className="card-body">
            {submitMessage && <div className="alert alert-success">{submitMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="name" className="form-control" id="email" value={name} onChange={(e) => setName(e.target.value)} />
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
                <button type="submit" className="btn btn-primary">Spremi promjene</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherAddScreen;
