import './App.module.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import PopularCategory from './layouts/popularCategory/PopularCategory';
import Delivery from './layouts/delivery/Delivery';
import Restaurants from './layouts/restaurants/Restaurants';
import Download from './layouts/download/Download';
import Testimonials from './layouts/testimonials/Testimonials';
import Subscribe from './layouts/subscribe/Subscribe';
import Footer from './layouts/footer/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <PopularCategory />
      <Delivery />
      <Restaurants />
      <Download />
      <Testimonials/>
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
