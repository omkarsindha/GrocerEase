
import React from 'react';
import EmployeeList from './components/EmployeeList';
import NavBar from './components/Navbar';
import HireForm from './components/HireForm'
import Employee from "./components/Employee";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import EditForm from "./components/EditEmployee";

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
                      <Route path={"/employee/:id"} element={<Employee />} />
                      <Route path={"/employee/:id/edit"} element={<EditForm />} />
                  </Routes>
              </div>
          </Router>
      </div>
  );
}

export default App;

