import { Routes, Route } from "react-router-dom";
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import RequestListforProvidedServices from './components/RequestListforProvidedServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProvidedServiceList from "./components/ProvidedServiceList";

function App() {
  return (
    <div className="header">   
      <Header />              
        <div className="content">
          <Routes>
            {/* Single Routes */}
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/auth/login" element={<UserLogin />}></Route>
            <Route path="/auth/signup" element={<UserSignup />}></Route>
            <Route path="/404" element={<ErrorPage />}></Route>
            <Route path="user/:userId/services/provided/:serviceId/requests" element={<RequestListforProvidedServices />}></Route>                       
            <Route path="/404" element={<ErrorPage />}></Route> 
            <Route path="/user/:userId/services/provided" element={<ProvidedServiceList />}></Route>                        
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;