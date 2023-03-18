
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import FoodItem from './components/FoodItem';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute.js';
import Login from './components/Login';
import Start from './components/Start'

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes element={<ProtectedRoute/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/Food/:id' element={<FoodItem/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login />}/>
        <Route exact path='/start' element={<Start />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
