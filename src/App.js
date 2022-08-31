import { Routes, Route, Link } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="Header">   
      <Header />              
        <div className="content">
          <Routes>
            {/* Single Routes */}
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/auth/login" element={<UserLogin />}></Route>
            <Route path="/auth/signup" element={<UserSignup />}></Route>                            
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;