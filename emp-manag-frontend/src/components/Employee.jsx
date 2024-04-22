import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
    const [employeeData, setEmployeeData] = useState({
        employee: {},
        showPOSLogin: false
    });

    const [cashier, setCashier] = useState({
        posId: '',
        posPass: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/employees/${id}`)
            .then(response => {
                const updatedData = {
                    employee: response.data,
                    showPOSLogin: response.data.department?.toLowerCase() === 'front end',
                };
                setEmployeeData(updatedData);

                if(updatedData.showPOSLogin){
                    axios.get(`http://localhost:8080/cashiers/${id}`)
                    .then(response => {
                        setCashier(response.data)
                    })

                }

            })
            .catch(error => {
                console.error('Error fetching employee:', error);
            });

    }, [id]);

    const { employee, showPOSLogin } = employeeData;

    const handleEditClick = () => {
        navigate(`/employee/${id}/edit`);
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/employees/${id}`);
            navigate('/employees');
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

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
                    <div className="flex justify-end">
                        <button
                            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                            onClick={handleEditClick}>
                            Update Details
                        </button>
                        <button
                            className="inline-flex items-center px-4 py-2 bg-red-500 text-white font-bold rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={handleDeleteClick}>
                            Fire
                        </button>
                    </div>
                </div>
            </div>
                        {showPOSLogin && (
                <div className="mt-4 max-w-md mx-auto bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                    <div className="px-4 py-2">
                        <h1 className="text-3xl font-bold mb-4">POS Login Details</h1>
                        <ul className="text-lg">
                            <li className="mb-2"><span className="font-semibold">ID:</span> {cashier.posId}</li>
                            <li className="mb-2"><span className="font-semibold">Password:</span> {cashier.posPass}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Employee;
