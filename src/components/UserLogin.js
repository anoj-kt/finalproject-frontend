import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom';

const initialstate = {
  email: "",
  password: ""
}

const UserLogin = () => {
  const [user, setUser] = useState(initialstate);

  return (
    <div>
      <h2>USER LOGIN</h2>
      <div>
      <h3>Don't you have an account yet?</h3> 
      <button>
        <Link to="/auth/signup">Sign up here!</Link> 
      </button>       
      </div>
      
    </div>
  )
}

export default UserLogin