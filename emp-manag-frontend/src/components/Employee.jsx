import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8080/employee/'+{id})
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error('Error fetching employees:', error);
            });
    }, []);

   return(

    
   )
};

export default Employee;
