import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AssignProject from './components/AssignProject';
import Project from './components/Project';
import Chart from './components/Chart';

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
      <Router>
      <div className="wrapper">
        <h1>Application</h1>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/assignproject' element={<AssignProject />} />
          <Route path='/project' element={<Project />} />
          <Route path='/chart' element={<Chart />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
