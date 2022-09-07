import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../assets/images/logo.png'
import {useState} from "react"
import { useCookies } from "react-cookie";


const Header = () => {
  // const [user, setUser] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const logout = () => {
    alert("User logged out");
    setCookie("user", '', {
      path: "/"
    });
  }

  return (
    <Container fluid className="nav__container">
    <Row>
      <Col xs={12} sm={6} className="nav__brand">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="logo" className="nav__logo" />
          <div className="nav__logo-title">
            <h1>findapro</h1>
            <p>affordable, fast, reliable, and local</p>
          </div>
        </Link>
      </Col>
      <Col className="nav__btns">
        <div>
          {
            !cookies.user ?
            <div>
              <Link to="/auth/signup">
                <button className="button nav__btn-reg">Register</button>
              </Link>
              <Link to="/auth/login">
                <button className="button nav__btn-login">Log in</button>
              </Link>
            </div>

          :

          <div>
            <Link to={`/user/${cookies.user}/profile`}>
              <button className="button nav__btn-reg">{/* {cookies.user} */}Profile</button>
            </Link>
            <Link to="/auth/login">
              <button className="button nav__btn-login" onClick={logout}>Logout</button>
            </Link>
          </div>

          }
          <Link to="/user/:userId/services/provided/new" style={{textDecoration: 'none'}}>
          <div className="nav__btn-createad">
            <i className="uil uil-plus icon"></i>
            <p>Create your advertisement</p>
          </div>
          </Link>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
          <form className="nav__search" action="">
            <div className="nav__search-input">
              <i class="uil uil-question-circle icon"></i>
              <input type="text" name="" placeholder="What are you looking for?"/>
            </div>
            <div className="nav__search-location">
              <i class="uil uil-map-marker icon"></i>
              <input type="text" name="" placeholder="Where ?"/>
            </div>
            <button className="button nav__btn-search"><i class="uil uil-search icon-white"></i><span>Search</span></button>
            <Link to="/service/all">
              <button className="button nav__btn-allservice"><i class="icon-white"></i>All services</button>
            </Link>
          </form>
      </Col>
    </Row>
  </Container>
  )
}

export default Header;