package com.grocery.management.repository;

import com.grocery.management.model.Cashier;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CashierRepository extends MongoRepository<Cashier,String> {

    Cashier findByEmployeeId(String employeeId);
}
