package com.grocery.management.repository;

import com.grocery.management.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
    Employee findByEmployeeId(String id);

}