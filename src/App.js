import { Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import Footer from './components/Footer';
import CreateAd from './components/CreateAd'
import ErrorPage from './components/ErrorPage';
import RequestListforProvidedServices from './components/RequestListforProvidedServices';
import ProvidedServiceList from "./components/ProvidedServiceList";
import RequestDetails from "./components/RequestDetails";
import RequestDetailsPending from "./components/RequestDetailsPending";
import RequestDetailsReject from "./components/RequestDetailsReject";
import ConsumedServiceList from "./components/ConsumedServiceList";
import ConsumedServiceDetails from "./components/ConsumedServiceDetails";
import ConsumedServiceDetailsPending from "./components/ConsumedServiceDetailsPending";
import ServiceSendRequest from "./components/ServiceSendRequest"
import ServiceSentRequest from "./components/ServiceSentRequest"


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
            <Route path="/user/:userId/services/provided/new" element={<CreateAd />}></Route>                             
            <Route path="/404" element={<ErrorPage />}></Route>
            {/* Provided Services & Request Details*/}
            <Route path="/user/:userId/services/provided" element={<ProvidedServiceList />}></Route>                        
            <Route path="/user/:userId/services/provided/:serviceId/requests" element={<RequestListforProvidedServices />}></Route> 
            <Route path="/user/:userId/services/provided/:serviceId/requests/:requestId" element={<RequestDetails />}></Route>
            <Route path="/user/:userId/services/provided/:serviceId/requests/:requestId/status/pending" element={<RequestDetailsPending />}></Route>
            <Route path="/user/:userId/services/provided/:serviceId/requests/:requestId/status/rejected" element={<RequestDetailsReject />}></Route>
            {/* Consumed Services & Request Details */}
            <Route path="/user/:userId/services/consumed/" element={<ConsumedServiceList />}></Route>
            <Route path="/user/:userId/services/consumed/requests/:requestId" element={<ConsumedServiceDetails />}></Route>
            <Route path="/user/:userId/services/consumed/requests/:requestId/pending" element={<ConsumedServiceDetailsPending />}></Route>
            {/* Send Request to use a Service  */}
            <Route path="/service/:serviceID/request/new" element={<ServiceSendRequest />}></Route>
            <Route path="/service/serviceID/request/sent" element={<ServiceSentRequest />}></Route>
          </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;