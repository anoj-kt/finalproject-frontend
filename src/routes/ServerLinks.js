import { Link } from 'react-router-dom';

const ServerLinks = () => {
    return (
        <div>
            {/* Home & Login */}
            <Link to="/">Home</Link>
            <Link to="/auth/login">Login!</Link>
            <Link to="/auth/signup">Sign up here!</Link>

            {/* User Profile  */}
            <Link to="/user/:userid/profile">User Profile</Link>
            <Link to="/user/:userId/profile/password">User Password Change</Link>
            <Link to="/user/:userid/profile/photo">User Profile Photo</Link>
            <Link to="/user/:userId/profile/address">User Change Address</Link>
            <Link to="/user/:userId/profile/telephone">User Change Phone</Link>            

            {/* Advertise */}
            <Link to="/createad">Create Advertisement</Link>
            <Link to="/user/:userId/services/provided/:serviceId/edit">Edit Advertisement</Link>
            <Link to="/user/:userId/services/provided/:serviceId/status/">Confirm Edits Advertisement</Link>

            {/* Requests & Details for Provided Services */}
            <Link to="user/:userId/services/provided/:serviceId/requests/">Requestlist for Provided Services</Link>
            <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId">Request Details</Link>
            <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status">Request in Progress</Link>
            <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status/cancelled">Request Details Cancelled</Link>
            <Link to="/user/:userId/services/provided/:serviceId/requests/:requestId/status/done">Request Details Done</Link>

            {/* Requests & Details for Consumed Services */}
            <Link to="/user/:userId/services/consumed">Consumed Services List</Link>
            <Link to="user/:userId/services/consumed/requests/:requestId">Consumed Service Details</Link>            
            <Link to="/user/:userId/services/consumed/requests/:requestId/pending">Consumed Service Details Pending</Link> 
            <Link to="/user/:userId/services/consumed/requests/:requestId/rejected">Consumed Service Details Rejected</Link> 

            {/* Send Request to use a Service  */}
            <Link to="/service/:serviceID/request/new">Send Request to use Service</Link>            
            <Link to="/service/serviceID/request/sent">Request Sent to use Service</Link> 

                       

            {/* User Provided Services  */}
            <Link to="/user/:userId/services/provided">Provided Service List</Link>
            <Link to="/user/:userId/provided/:serviceId/details">Provided Service Details</Link>

        </div>
    );
}
 
export default ServerLinks;