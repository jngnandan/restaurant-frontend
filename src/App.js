
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import {HeaderMegaMenu} from './components/HeaderMegaMenu'
// import { CardsCarousel } from './components/FeaturesCard';
import { FeaturesCard } from './components/HeaderMegaMenu';
import FoodItem from './components/FoodItem';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute.js';
import {AuthenticationForm} from './components/AuthenticationForm';
import Start from './components/Start'
import {ForgotPassword} from './components/ForgotPassword'
import {SignupForm} from './components/SignupForm'
import {CardWithStats} from './components/CardWithStats'
import {CardsCarousel} from './components/CardsCarousel'
import {Contact} from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
        <HeaderMegaMenu/>
      <Routes element={<ProtectedRoute/>}>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/feature' element={<HeaderMegaMenu/>}/> */}
        <Route path='/Food/:id' element={<FoodItem/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<AuthenticationForm/>}/>
        <Route exact path='/start' element={<Start />}/>
        <Route exact path='/forget' element={<ForgotPassword/>}/>
        <Route exact path='/signup' element={<SignupForm/>}/>
        <Route exact path='/card' element={<CardsCarousel/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
