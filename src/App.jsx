import './App.module.css';
import Header from './layouts/header/Header';
import Main from './layouts/main/Main';
import PopularCategory from './layouts/popularCategory/PopularCategory';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Main />
      <PopularCategory />
    </div>
  );
}

export default App;
