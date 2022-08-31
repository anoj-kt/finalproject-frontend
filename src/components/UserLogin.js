import { Link } from 'react-router-dom';

const UserLogin = () => {
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