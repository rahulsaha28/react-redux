
import React from 'react';
import { Link } from 'react-router-dom';

const EditNavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Movie Masti</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#EditNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="EditNavBar">
                    <ul className="navbar-nav ms-auto mb-2">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        

                    </ul>
                    <form className="d-flex ms-md-5">
                        <input type="search" className="form-control mb-2 me-2" placeholder="Search for movies"/>
                        <button className="btn btn-primary mb-2">Search</button>
                    </form>

                </div>
            </div>
        </nav>
    );
};

export default EditNavBar;