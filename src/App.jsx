import './App.module.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import PopularCategory from './layouts/popularCategory/PopularCategory';
import Delivery from './layouts/delivery/Delivery';
import Restaurants from './layouts/restaurants/Restaurants';
import Download from './layouts/download/Download';
import Testimonials from './layouts/testimonials/Testimonials';

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
    </div>
  );
}

export default App;
