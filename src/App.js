// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer, { handleScroll } from './Footer';

function App() {
  return (
    <div className="App" onScroll={handleScroll}>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
