
import React from 'react';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/Navbar';
import HireForm from './components/HireForm'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

function App() {
  return (
      <div className="bg-gray-900 min-h-screen" >
      <NavBar />
          <Router>
              <div className="bg-gray-900">
                  <Routes>
                      <Route path="/" element={<EmployeeList />} />
                      <Route path="/hire" element={<HireForm/>} />
                      <Route path="/employees" element={<EmployeeList />} />
                  </Routes>
              </div>
          </Router>
      </div>
  );
}

export default App;

