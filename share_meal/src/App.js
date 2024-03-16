import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css'; 
import HomePage from './user/userhome'
import DonationForm from './user/fooddetails'
import Confirmation from './user/confirmed';
import NgoConfirmation from './user/NgoConfirmation';
import AboutUs from './user/AboutUs';
import ContactUs from './user/ContactUs';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm'
import Home  from './Home';
import About from './About';
import Contact from './Contact';
import Applyform from './user/Applyform';
import NgoAdmin from './ngo/ngoadmin';
import Admin from './admin/admin';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Route path='/homepage' element={<HomePage />}></Route>
      <Route path='/fooddetails' element={<DonationForm />}></Route>
        <Route path='/homepage/fooddetails' element={<DonationForm />}></Route>
        <Route  path='/confirmed' element={<Confirmation />}></Route>
        <Route  path='/ngoconfirmation' element={<NgoConfirmation />}></Route>
        <Route  path='/contactus' element={<ContactUs />}></Route>
        <Route path='/aboutus' element={<AboutUs/>} ></Route>
        <Route path='/login' element={<LoginForm/>} ></Route>
        <Route path='/signup' element={<SignUpForm/>} ></Route>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About />}> </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/apply' element={<Applyform/>}></Route>
        <Route path='/admin' element={<NgoAdmin />}> </Route>
        <Route path='/ngo' element={<Admin />}></Route>
      </Routes>
   
    </BrowserRouter>
  );
}
export default App;
