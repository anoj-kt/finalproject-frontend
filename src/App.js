import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import Footer from './components/Footer';




function App() {
  return (
    <Routing>
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
    </Routing>
  );
}

export default App;
