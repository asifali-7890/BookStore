import { useEffect, useState } from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Course from "./components/Course"
import toast, { Toaster } from 'react-hot-toast';
import Home from "./components/Home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/course' element={authUser? <Course /> : <Navigate to='/signup'/>} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
