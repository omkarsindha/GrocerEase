import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const EditForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: ''
    });
    const { employeeId } = useParams();

    useEffect(() => {
        fetchEmployeeDetails();
    }, [employeeId]);

    const fetchEmployeeDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/employees/${employeeId}`);
            const { name, email, position } = response.data;
            setFormData({ name, email, position });
        } catch (error) {
            console.error('Error fetching employee details:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/employees/${employeeId}`, formData);
            console.log('Employee details updated successfully:', response.data);
        } catch (error) {
            console.error('There was a problem with updating employee details:', error);
        }
    };

    return (
        <div className="container mx-auto bg-gray-900 text-white">
            <div className="flex justify-center">
                <div className="max-w-md w-full py-4">
                    <div className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-xl text-center font-bold mb-4">Edit Employee</h2>
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
                                    <input type="radio" id="position" className="form-radio" value="Cashier"
                                           onChange={handleChange} checked={formData.position === "Cashier"}/>
                                    <span className="ml-2">Cashier</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" id="position" className="form-radio" value="Override"
                                           onChange={handleChange} checked={formData.position === "Override"}/>
                                    <span className="ml-2">Override</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" id="position" className="form-radio" value="Clerk"
                                           onChange={handleChange} checked={formData.position === "Clerk"}/>
                                    <span className="ml-2">Clerk</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="document" className="block text-gray-300 text-sm font-bold mb-2">Upload
                                    Document</label>
                                <input type="file" id="document" onChange={handleChange}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update
                                    Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditForm;
