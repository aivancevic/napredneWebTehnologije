import React, { useState } from 'react';
import axios from 'axios';

const BookAddScreen = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageURL] = useState(''); // Promijenjeno ime stanja u imageURL
  const [publisher, setPublisher] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageName = selectedImage.name;
    const imageUrl = `/images/${imageName}`; 
    setImageURL(imageUrl);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/books/create`, {
        name: name,
        image: imageUrl,
        author: author,
        description: description,
        price: parseFloat(price),
        publisher: publisher,
      });
  
      setSubmitMessage('Submit successful!');
  
    } catch (error) {
      console.log(error);
      setSubmitMessage('Submit failed. Please try again.');
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Add book</div>
            <div className="card-body">
              {submitMessage && <div className="alert alert-success">{submitMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="name" className="form-control" id="email" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">Author</label>
                  <input type="author" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="description" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input type="price" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image</label>
                  <input type="file" className="form-control" id="image" onChange={handleImageChange} />
                </div>
                {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ maxWidth: '100px' }} />}
                <div className="mb-3">
                  <label htmlFor="publisher" className="form-label">Publisher</label>
                  <input type="publisher" className="form-control" id="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
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

export default BookAddScreen;
