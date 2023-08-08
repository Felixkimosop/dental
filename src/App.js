import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';

function App() {
  return (
    <div className="app">
      <Navbar />
    <Home />
    <Services />
    <Form />
    <About />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
