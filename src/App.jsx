import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Wishlist from './Pages/Wishlist';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='*' element={<PageNotFound/>}  />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
