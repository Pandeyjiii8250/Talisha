import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav"
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import "./NavbarMy.css";
import {useAuth} from './Contex/AuthContex';
// import {AuthContex} from './Contex/AuthContex';
function NavbarMy(){
    const {currentUser, signout} = useAuth();

    async function handelSignOut(e){
        e.preventDefault();
        try{
            await signout();
            // console.log(currentUser);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='trans'>
        <div className='container'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home" className='brand-my'>Talisha.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><i class="fas fa fa-home icon"></i>Home</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Satyanarayan Kit</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ganpati Kit</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Navratri Kit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Rudra Abhishek Kit</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        {currentUser !== null ? 
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Your Cart</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handelSignOut}>Log Out</NavDropdown.Item>
                        </NavDropdown>:
                        <Nav.Link href="Login" className="login-btn" >
                            <Button ghost className='login-btn-nav' id="login-btn-nav">
                                <Link to='/signup'>Login</Link>
                            </Button>
                        </Nav.Link>
                        }   
                        <Nav.Link className="cart-link" href="#Cart"><i class="fas fa fa-shopping-cart fa-2x cart"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </div>
    );
}

export default NavbarMy;

