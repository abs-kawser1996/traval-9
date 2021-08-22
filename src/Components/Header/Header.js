import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import './Header.css';
import logo from '../P-Image/Logo.png'

const Header = () => {

  return (
    <div className=" ml-20 mr-20  tranparent">
      <Navbar  className=" d-flex justify-content-evenly .bg-dark">

        <img src={logo} style={{ height: "56px", width: "120.26px" }} alt="" />

        <div class="mb-3">

          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />

        </div>
        <Nav className=" ml-auto">

          <Nav.Link className="clor mr-3">
            <Link  to='/news'>News</Link>
          </Nav.Link>

          <Nav.Link className="clor mr-3">
            <Link  to='/destination'>Destination</Link>
          </Nav.Link>

          <Nav.Link className="clor mr-3">
            <Link  to='/blog'>Blog</Link>
          </Nav.Link>
          <button type="button" class="btn btn-warning">Login</button>
        </Nav>

      </Navbar>



    </div>
  );
};

export default Header;