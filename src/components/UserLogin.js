import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div>
      <h2>USER LOGIN</h2>
      <div>
      <h3>Don't have an account yet? <Link to="/auth/signup">Sign up here!</Link> </h3>
      </div>
      
    </div>
  )
}

export default UserLogin