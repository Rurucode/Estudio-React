import './App.css';
import Products from './Components/Products/Products';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Product from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import Contador from './Components/Contador/Contador';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
        <Products/>
      <Footer/>
    </div>
  );
}

export default App;
