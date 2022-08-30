import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <Container fluid className="nav__container">
    <Row>
      <Col xs={12} sm={6} className="nav__brand">
       <img src={logo} alt="logo" className="nav__logo" />
        <div className="nav__logo-title">
          <h1>helpmarket</h1>
          <p>affordable, fast, reliable, and local</p>
        </div>
      </Col>
      <Col className="nav__btns">
        <div>
          <button className="button nav__btn-reg">Register</button>
          <button className="button nav__btn-login">Log in</button>
          <div className="nav__btn-createad">
            <i className="uil uil-plus icon"></i>
            <p>Create your advertisement</p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
          <form className="nav__search" action="">
            <div className="nav__search-input">
              <i class="uil uil-question-circle icon"></i>
              <input type="text" name="" placeholder="What do you need?"/>
            </div>
            <div className="nav__search-location">
              <i class="uil uil-map-marker icon"></i>
              <input type="text" name="" placeholder="Where are you?"/>
            </div>
            <button className="button nav__btn-search"><i class="uil uil-search icon-white"></i><span>Search</span></button>
          </form>
      </Col>
    </Row>
  </Container>
  )
}

export default Header;