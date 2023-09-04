import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [])

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      console.log('User Logged out');
      window.location.replace('/')
    } catch (error) {
      console.error('Cannot Log out');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">Book Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {token ? (
                <div className="navbar-nav">
                  <Link to={`/`} className="nav-link active" aria-current="page">Books</Link>
                  <Link to={`/publisher`} className="nav-link active" aria-current="page">Publishers</Link>
                  <Link to={`/signout`} className="nav-link active" aria-current="page" onClick={handleSignOut} >Sign Out</Link>
                </div>) : 
                (
                <div className="navbar-nav">
                  <Link to={`/`} className="nav-link active" aria-current="page">Books</Link>
                  <Link to={`/publisher`} className="nav-link active" aria-current="page">Publishers</Link>
                  <Link to={`/login`} className="nav-link active" aria-current="page">Login</Link>
                  <Link to={`/register`} className="nav-link active" aria-current="page">Register</Link>
                </div>
                )
              }
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
