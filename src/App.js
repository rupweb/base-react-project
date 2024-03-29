import React from 'react';
import './styles/bootstrap.min.css';
import './styles/app.css';
import './styles/images.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Left from './components/Left.js';
import Right from './components/Right.js';
import Middle from './components/Middle.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout><Middle /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

const Layout = ({ children }) => (
  <>
    <div className="left-column"><Left /></div>
    <div className="middle-column">{children}</div>
    <div className="right-column"><Right /></div>
  </>
);

export default App;

