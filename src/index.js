import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SimpleSlider from './component/SimpleSlider';
import Project from './component/Project';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Appfooter from './component/Appfooter';
import Gallery from './component/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
    <App/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Project-page" element={<Project/>} />
        <Route path="/Gallery-page" element={<Gallery/>}/>
    </Routes>
    <Appfooter/>
    </BrowserRouter>

   
);
