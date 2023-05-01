import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';
import { CartProvider } from './CartContext';
import { Header, Footer } from './layouts';
import {
  HomePage,
  ServicePage,
  About,
  Contact,
  LoginPage,
  Cart,
  NoMatch
} from './pages';


import './App.module.css';

const App = () => {

  return (
    <div className="App">      
        <CartProvider>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/service' element={<ServicePage />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
          <Footer />
        </CartProvider>     
    </div>
  );
}

export default App;
