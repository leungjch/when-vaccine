import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header() {
    return (
        <div className="nav-container ">
            <div className="row">
                <div className="col-md-3 text-center my-auto">
                    <Link 
                        to={{
                            pathname: "/",
                        }}
                    >
                        <h4 className="website-name">When Vaccine?</h4>    
                    </Link>
                </div>
                <div className="col-1 text-center my-auto">
                    <Link 
                        to={{
                            pathname: "/",
                        }}
                    >
                        <p className="website-name">Home</p>    
                    </Link>
                </div>
                <div className="col-1 text-center my-auto">
                    <Link 
                        to={{
                            pathname: "/about",
                        }}
                    >
                        <p className="website-name">About</p>    
                    </Link>
                </div>
                <div className="col-1 text-center my-auto">
                    <Link 
                        to={{
                            pathname: "/data",
                        }}
                    >
                        <p className="website-name">Data</p>    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;