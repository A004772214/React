import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import MyTown from './pages/MyTown';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">About Me</Link> | <Link to="/mytown">My Town</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/mytown" element={<MyTown />} />
      </Routes>
    </Router>
  );
}

export default App;
