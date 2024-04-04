import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/employees/')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching employees:', error);
            });
    }, []);

    return (
        <div className="container text-center">
            <h2 className="p-3 bg">Employee List</h2>
            {employees.map((employee) => (
                <div className="card mb-3" style={{maxWidth: '300px', margin: '0 auto'}} key={employee.employeeId}>
                    <div className="card-body">
                        <h5 className="card-title">{employee.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{employee.position}</h6>
                        <p className="text">Department: {employee.department}</p>
                        <p className="card-text">Email: {employee.email}</p>
                        <a href={'/employee/' + employee.employeeId} className="btn btn-primary">More details</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmployeeList;
