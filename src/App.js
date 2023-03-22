
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Views/Home';
import {HeaderMegaMenu} from './components/HeaderMegaMenu'
import { FeaturesCard } from './components/HeaderMegaMenu';
import FoodItem from './components/FoodItem';
import Profile from './components/Views/Profile';
import ProtectedRoute from './components/ProtectedRoute.js';
import {AuthenticationForm} from './components/Views/AuthenticationForm';
import {ForgotPassword} from './components/Views/ForgotPassword'
import {SignupForm} from './components/Views/SignupForm'
import {CardWithStats} from './components/CardWithStats'
import {CardsCarousel} from './components/CardsCarousel'
import {Contact} from './components/Views/Contact';
import Footer from './components/Footer';
import Menu from './components/Views/Menu';

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
        <Route exact path='/forget' element={<ForgotPassword/>}/>
        <Route exact path='/signup' element={<SignupForm/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/menu' element={<Menu/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
