import React from 'react';
import DataTable from './Dashtable';
import Read from './read';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function DashApp() {
  return (
    <div>
    
    
      <Routes>
      <Route path="/"  element={<DataTable />}/>
      <Route path="/read/:id" element={<Read />} />
      </Routes>
   
    </div>
  );
}

export default DashApp;