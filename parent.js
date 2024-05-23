import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './alegro';
import Investors from './investors';
import Contact from './contact';
import Job from './job';

function Parent() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/job" element={<Job/>}/>
        <Route path="/investors" element={<Investors/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Parent

