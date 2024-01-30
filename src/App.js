import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/account/Login'
import Home from './pages/Home/Home';
import Blog from './pages/Blog';
import ReadingArea from './pages/ReadingArea/ReadingArea';
import Dashboard from './pages/Dashboard/Dashboard';
import Journal from './pages/Journal/Journal';
import HypnoTherapy from './pages/HypnoTherapy/HypnoTherapy';
import Profile from './components/Profile/Profile';

function App() {
  return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accounts' element={<Login />} />
      <Route path='/readingarea' element={<ReadingArea/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/journal' element={<Journal/>}/>
      <Route path='/hypnotherapy' element={<HypnoTherapy />} />
      <Route path="/profile" element={<Profile/>} />
      </Routes>
  );
}

export default App;
