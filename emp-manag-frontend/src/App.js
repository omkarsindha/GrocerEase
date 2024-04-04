
import React from 'react';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/Navbar';
import HireForm from './components/HireForm'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
      <>
      <NavBar />
          <Router>
              <div>
                  <Routes>
                      <Route path="/" element={<EmployeeList />} />
                      <Route path="/hire" element={<HireForm/>} />
                      <Route path="/employees" element={<EmployeeList />} />
                  </Routes>
              </div>
          </Router>
      </>
  );
}

export default App;

