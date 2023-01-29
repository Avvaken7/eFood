import './App.module.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import PopularCategory from './layouts/popularCategory/PopularCategory';
import Delivery from './layouts/delivery/Delivery';
import Restaurants from './layouts/restaurants/Restaurants';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <PopularCategory />
      <Delivery />
      <Restaurants />
    </div>
  );
}

export default App;
