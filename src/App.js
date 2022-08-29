import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import Footer from "./components/Footer";
import UserSignup from "./components/UserSignup";
import UserProfile from "./components/UserProfile";
import UserChangePw from "./components/UserChangePw";
import UserChangeAvatar from "./components/UserChangeAvatar";
import CreateAd from "./components/CreateAd";
import UserChangeMobile from "./components/UserChangeMobile";
import UserChangeAddress from "./components/UserChangeAddress";
import { ProvidedServiceList } from "./components/ProvidedServiceList";
import ConsumedServiceList from "./components/ConsumedServiceList";
import RequestList from "./components/RequestList";
import RequestDetailsDone from "./components/RequestDetailsDone";
import RequestDetailsPending from "./components/RequestDetailsPending";
import RequestDetailsReject from "./components/RequestDetailsReject";
import ServiceDetails from "./components/ServiceDetails";
import ServiceSendRequest from "./components/ServiceSendRequest";
import ServiceSentRequest from "./components/ServiceSentRequest";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (

    <Router>
      <div className="Header">   
        <Header />        
        <div className="content"> 

        <Routes>
          {/* Single Routes */}
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/404" element={<ErrorPage />}></Route>

          {/* Routes that may need user id  */}
          <Route path="/providedservices" element={<ProvidedServiceList />}></Route>          
          <Route path="/consumedservices" element={<ConsumedServiceList />}></Route>
          <Route path="/changepw" element={<UserChangePw />}></Route>
          <Route path="/changeavatar" element={<UserChangeAvatar />}></Route>
          <Route path="/changephone" element={<UserChangeMobile />}></Route>
          <Route path="/changeaddress" element={<UserChangeAddress />}></Route>
          <Route path="/createad" element={<CreateAd />}></Route>
          
          {/* Double Routes */}
          <Route path="/requests" element={<RequestList />}></Route>
          <Route path="/requests/details=true" element={<RequestDetailsDone />}></Route>
          <Route path="/requests/details=pending" element={<RequestDetailsPending />}></Route>
          <Route path="/requests/details=false" element={<RequestDetailsReject />}></Route>
          <Route path="/service/details" element={<ServiceDetails />}></Route>
          <Route path="/request/send" element={<ServiceSendRequest />}></Route>
          <Route path="/request/sent" element={<ServiceSentRequest />}></Route>
        </Routes>

        </div>
        <Footer />
      </div>    
       
      
    </Router>
      
    
  );
}

export default App;
