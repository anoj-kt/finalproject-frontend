import { BrowserRouter as Routing, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
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
import ProvidedServiceList from "./components/ProvidedServiceList";
import ConsumedServiceList from "./components/ConsumedServiceList";
import ConsumedServiceDetails from "./components/ConsumedServiceDetails";
import RequestList from "./components/RequestList";
import RequestDetailsDone from "./components/RequestDetailsDone";
import RequestDetailsPending from "./components/RequestDetailsPending";
import RequestDetailsReject from "./components/RequestDetailsReject";
import ServiceSendRequest from "./components/ServiceSendRequest";
import ServiceSentRequest from "./components/ServiceSentRequest";
import ErrorPage from "./components/ErrorPage";
import EditAd from "./components/EditAd";
import EditAdConfirm from "./components/EditAdConfirm";
import ProvidedServiceDetails from "../components/ProvidedServiceDetails";

function ServerRoute() {
    return (
      <Routing>
        <div className="Header">   
          <Header />        
            <div className="content">
              <Routes>
                {/* Home & Login */}                
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/auth/login" element={<UserLogin />}></Route>
                <Route path="/auth/signup" element={<UserSignup />}></Route>

                {/* User Profile  */}
                <Route path="/user/:userid/profile" element={<UserProfile />}></Route>
                <Route path="/user/:userId/profile/password" element={<UserChangePw />}></Route>
                <Route path="/user/:userid/profile/photo" element={<UserChangeAvatar />}></Route>
                <Route path="/user/:userId/profile/address" element={<UserChangeAddress />}></Route>
                <Route path="/user/:userId/profile/telephone" element={<UserChangeMobile />}></Route>

                {/* Advertise */}                
                <Route path="/createad" element={<CreateAd />}></Route>              
                <Route path="/user/:userId/services/provided/:serviceId/edit" element={<EditAd />}></Route> 
                <Route path="/user/:userId/services/provided/:serviceId/status/" element={<EditAdConfirm />}></Route>

{/* DOUBLE CHECK Requests */}
                <Route path="/requests" element={<RequestList />}></Route>
                <Route path="user/:userId/services/provided/:serviceId/requests" element={<RequestDetailsDone />}></Route>
                <Route path="/user/:userId/services/provided/:serviceId/requests/:requestId" element={<RequestDetailsPending />}></Route>
                <Route path="/user/:userId/services/provided/:serviceId/requests/:requestId" element={<RequestDetailsReject />}></Route>

                {/* Send Request to use a Service  */}
                <Route path="/service/:serviceID/request/new" element={<ServiceSendRequest />}></Route>
                <Route path="/service/serviceID/request/sent" element={<ServiceSentRequest />}></Route>

                {/* Consumed Services  */}
                <Route path="/user/:userId/services/consumed" element={<ConsumedServiceList />}></Route> 
                <Route path="user/:userId/services/consumed/requests/:requestId" element={<ConsumedServiceDetails />}></Route>

                {/* Provided Services  */}    
                <Route path="/user/:userId/services/provided" element={<ProvidedServiceList />}></Route>          
                <Route path="/user/:userId/services/provided/requests/:requestId" element={<ProvidedServiceDetails />}></Route>          
                
                {/* 404  */}
                <Route path="/404" element={<ErrorPage />}></Route>
              </Routes>
            </div>
          <Footer />
        </div>
      </Routing>
    );
  }
  
  export default ServerRoute;




