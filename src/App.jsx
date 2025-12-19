import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import About from './pages/About';
import LocationsPage from './pages/Locations';
import Contact from './pages/Contact';
import OrderPage from './pages/Order';
import FranchisePage from './pages/Franchise';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/order" element={<OrderPage />} />
                        <Route path="/orders" element={<OrderPage />} /> {/* Maintaining redirect/alias */}
                        <Route path="/franchise" element={<FranchisePage />} />
                        <Route path="/locations" element={<LocationsPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    );
}

export default App;
