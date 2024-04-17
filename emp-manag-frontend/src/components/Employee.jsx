import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
    const [employee, setEmployee] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/employees/${id}`)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee:', error);
            });
    }, [id]);

    return (
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white py-8 px-4">
            <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                    <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
                    <ul className="text-lg">
                        <li className="mb-2"><span className="font-semibold">Name:</span> {employee.name}</li>
                        <li className="mb-2"><span className="font-semibold">Email:</span> {employee.email}</li>
                        <li className="mb-2"><span className="font-semibold">Position:</span> {employee.position}</li>
                        <li className="mb-2"><span className="font-semibold">Department:</span> {employee.department}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Employee;
