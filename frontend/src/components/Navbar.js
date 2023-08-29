import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Book Store</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link to={`/`} class="nav-link active" aria-current="page">Books</Link>
                <Link to={`/publisher`} class="nav-link active" aria-current="page">Publishers</Link>
                <Link to={`/`} class="nav-link active" aria-current="page">Login</Link>
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
