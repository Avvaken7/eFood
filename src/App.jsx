import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import { Header, Footer } from './layouts';
import {
  HomePage,
  ServicePage,
  CitiesPage,
  Contact,
  DownloadApplication,
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
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/service' element={<ServicePage />}></Route>
          <Route path='/cities' element={<CitiesPage />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/download' element={<DownloadApplication />}></Route>
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
