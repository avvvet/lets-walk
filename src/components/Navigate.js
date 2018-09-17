import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, Navbar, NavItem , Image} from 'react-bootstrap';
  
class Navigate extends Component {
    
    render()
    {
        return(
            <Navbar>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Header>
                <Navbar.Brand>
                  <Image src="/assets/male.png" height={30}></Image>  
                </Navbar.Brand>
                <Navbar.Brand>
                <a href="#">lets^walk</a>
                </Navbar.Brand>
                <Navbar.Brand>
                  <Image src="/assets/female.png" height={30}></Image>  
                </Navbar.Brand>
            </Navbar.Header>
           <Navbar.Collapse >
            <Nav>
            <NavItem>
                <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/map">Map</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/about">About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigate;