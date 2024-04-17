import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HireForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: 'Cashier'
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formDataToSend = new FormData();
    //         formDataToSend.append('name', formData.name);
    //         formDataToSend.append('email', formData.email);
    //         formDataToSend.append('position', formData.position);
    //         //formDataToSend.append('document', e.target.elements.document.files[0]);
    //
    //         const response = await fetch('http://localhost:8080/employees/', {
    //             method: 'POST',
    //             body: formDataToSend
    //         });
    //         const newEmployee = await response.json();
    //         console.log('Employee added successfully:', newEmployee);
    //         navigate(`/employee/${newEmployee.employeeId}`);
    //     } catch (error) {
    //         console.error('There was a problem with the form submission:', error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/employees/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const newEmployee = await response.json();
            console.log('Employee added successfully:', newEmployee);
            window.location.href = `/employee/${newEmployee.employeeId}`;
        } catch (error) {
            console.error('There was a problem with the form submission:', error);
        }
    };

    return (
        <div className="container mx-auto bg-gray-900 text-white">
            <div className="flex justify-center">
                <div className="max-w-md w-full py-4">
                    <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-xl text-center font-bold mb-4">Hire Employee</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-600" onChange={handleChange} value={formData.name} required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-600" onChange={handleChange} value={formData.email} required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2">Select Position</label>
                                <label className="inline-flex items-center">
                                    <input type="radio" id="position" className="form-radio" value="Cashier" onChange={handleChange} checked={formData.position === "cashier"} />
                                    <span className="ml-2">Cashier</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" id="position" className="form-radio" value="Override" onChange={handleChange} checked={formData.position === "override"} />
                                    <span className="ml-2">Override</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" id="position" className="form-radio" value="Clerk" onChange={handleChange} checked={formData.position === "clerk"} />
                                    <span className="ml-2">Clerk</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="document" className="block text-gray-300 text-sm font-bold mb-2">Upload
                                    Document</label>
                                <input type="file" id="document" onChange={handleChange} />
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Hire</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireForm;
