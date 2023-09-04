import React, { useEffect, useState } from 'react'
import axios from 'axios';

const BookEditScreen = ({match}) => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [author, setAuthor] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [publisher, setPublisher] = useState()

    useEffect(() => {
        axios.get(`/api/books/${match.params.id}`)
        .then(response => {
            setName(response.data.name);
            setImage(response.data.image);
            setAuthor(response.data.author);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setPublisher(response.data.publisher);
        })
        .catch(error => {
          console.error('Error fetching book:', error);
        });
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.put(`/api/books/${match.params.id}`, { 
                name: name,
                image: image, 
                description: description,
                author: author,
                price: parseFloat(price),
                publisher: publisher });  
            console.log('Change successful:', response.data);
        } catch (error) {
            console.error('Erron Change:', error);
        }
      };
    
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Book detail</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Title</label>
                  <input type="name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
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
                  <label htmlFor="publisher" className="form-label">Publisher</label>
                  <input type="publisher" className="form-control" id="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
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

export default BookEditScreen
