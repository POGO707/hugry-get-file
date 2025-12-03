import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      case 'reviews':
        return <Reviews />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
