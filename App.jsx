import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Venues from './pages/venues.jsx';
import Login from './pages/login.jsx';
import MyProfile from './pages/myProfile.jsx'; 
import MyLectures from './pages/MyLectures.jsx';
import Book from './pages/book.jsx';
import Navbar from './Components/Navbar.jsx';
import SpecialityMenu from './Components/SpecialityMenu.jsx';
import ExploreLectures from './Components/ExploreLectures.jsx';
function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar />
    <SpecialityMenu/>
    <ExploreLectures/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Venues" element={<venues />} />
        <Route path="/Venue/:speciality" element={<Home />} />
        <Route path="/Login" element={<login />} />
        <Route path="/MyProfile" element={<MyProfile />} /> 
        <Route path="/Mylectures" element={<MyLectures/>} />
        <Route path="/book" element={<book />} /> 
      
      </Routes>
    </div>
  );
}

export default App

