import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'

import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
