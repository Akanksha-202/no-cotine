import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/account/Login'
import Home from './pages/Home/Home';
import Blog from './pages/Blog';
import ReadingArea from './pages/ReadingArea/ReadingArea';

function App() {
  return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accounts' element={<Login />} />
      <Route path='/readingarea' element={<ReadingArea/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      </Routes>
  );
}

export default App;
