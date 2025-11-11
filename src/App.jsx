import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/Projects';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
