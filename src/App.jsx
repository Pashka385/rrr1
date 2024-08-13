import Carts from './components/carts/cart';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Works from './components/works/works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Works/>
      <Carts/>
      <Footer/>
    </div>
  );
}

export default App;
