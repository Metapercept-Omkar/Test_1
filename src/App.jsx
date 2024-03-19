import React from 'react';
import { BrowserRouter , Routes, Route, useNavigate } from 'react-router-dom';
import {Landing} from './components/Landing';
import {Dashboard} from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
        <AppNav/>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

function AppNav() {
  const navigate=useNavigate();

  return(
    <div>
      <button onClick={()=>{
        navigate("/")}
      } >
        landing
      </button>
      <button onClick={()=>{
        navigate("/dashboard")}
      }>
        Dashboard
      </button>
    </div>
  )
}

export default App;
