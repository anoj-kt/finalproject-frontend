import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home'
import UserSignup from './components/UserSignup';

function App() {
  return (
    <>
      <Header/>
      {/* <Home/> */}
      <UserSignup/>
      <Footer/>
    </>
  );
}

export default App;