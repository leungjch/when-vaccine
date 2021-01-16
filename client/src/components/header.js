import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

import "../styles/header.css";


function Header() {
    return (
        <div className="nav-container ">
            <div className="website-name-container">
                <Link 
                    to={{
                        pathname: "/",
                    }}
                >
                    <p className="website-name">When Vaccine?</p>    
                </Link>
            </div>
            <div className="links">
                <div className="link-container">
                    <Link 
                        to={{
                            pathname: "/",
                        }}
                    >
                        <p className="website-link">Home</p>    
                    </Link>
                </div>
                <div className="link-container">
                    <Link 
                        to={{
                            pathname: "/about",
                        }}
                    >
                        <p className="website-link">About</p>    
                    </Link>
                </div>
                <div className="link-container">
                    <Link 
                        to={{
                            pathname: "/data",
                        }}
                    >
                        <p className="website-link">Data</p>    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;