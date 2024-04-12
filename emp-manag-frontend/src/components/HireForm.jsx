import React, {useState} from "react";
import {redirect} from "react-router-dom";
//import {use} from 'react-router-dom';


const HireForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department:'',
        position:'',
        document: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('department', formData.department);
            formDataToSend.append('position', formData.position);
            formDataToSend.append('document', e.target.elements.document.files[0]);
    
            const response = await fetch('http://localhost:8080/employees/', {
                method: 'POST',
                body: formDataToSend,
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Hire Employee</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" id="name" className="form-control" onChange={handleChange} value={formData.name} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" className="form-control" onChange={handleChange} value={formData.email} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="position" className="form-label">Select Position</label>
                                    <select id="position" className="form-select" onChange={handleChange}
                                            value={formData.position} required>
                                        <option value="" selected></option>
                                        <option value="Cashier">Cashier</option>
                                        <option value="Override">Override</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="department" className="form-label">Select Department</label>
                                    <select id="department" className="form-select" onChange={handleChange}
                                            value={formData.department} required>
                                        <option value="" selected></option>
                                        <option value="Front End">Front End</option>
                                        <option value="Back End">Back End</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Upload Documnet</label>
                                    <input class="form-control" type="file" id="document" onChange={handleChange} />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block w-25">Hire</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireForm;

