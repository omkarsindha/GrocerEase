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
        <div className="container mx-auto text-center bg-gray-900 text-white">
            <h2 className="p-3 text-2xl font-bold bg-gray-800">Employee List</h2>
            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                employees.map((employee) => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4 bg-gray-800" key={employee.employeeId}>
                        <div className="px-6 py-4">
                            <h5 className="font-bold text-xl mb-2">{employee.name}</h5>
                            <h6 className="text-sm text-gray-400 mb-2">Position: {employee.position}</h6>
                            <p className="text-sm text-gray-400">Department: {employee.department}</p>
                            <p className="text-sm text-gray-400">Email: {employee.email}</p>
                        </div>
                        <div className="px-6 py-4">
                            <a href={'/employee/' + employee.employeeId} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More details</a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default EmployeeList;
