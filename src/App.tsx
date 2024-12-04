import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Pricing } from './pages/Pricing';
// import { Company } from './pages/Company';
// import { Customers } from './pages/Customers';
// import { Pricing } from './pages/Pricing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        {/* <Route path="/company" element={<Company />} />
        <Route path="/customers" element={<Customers />} /> */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}