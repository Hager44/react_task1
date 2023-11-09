import './App.css';
import React from 'react';

import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Dashboard/read';
import DataTable from './components/Dashboard/Dashtable';
import { ToastContainer } from 'react-toastify'; 
import Navigationbar from './components/Navigation/navigationbar/Navigationbar';
import backgroundImage from './components/New_folder/Rectangle_19290.webP';
import Home from './Home';



function App() {
  
  const backgroundStyle = {
    backgroundImage:`url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    overflow: 'hidden',
  };
  
 
  return (
    <div>
       
      <BrowserRouter>
      <Routes>
      <Route path="/"  element={
     <Home/>
      }/>
      <Route path="/dashboard"  element={
        <>
        <div style={backgroundStyle}>
      <Navigationbar/>
      
      <DataTable />
     
      </div>
       <Footer/>
       </>
      }/>
      <Route path="/read/:id" element={
      <Read />} />
     
      </Routes>
      </BrowserRouter>
      <ToastContainer
      />
      
    </div>
  
  );
}
export default App;
