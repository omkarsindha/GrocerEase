package com.grocery.management.service;


import com.grocery.management.model.Cashier;
import com.grocery.management.model.Employee;
import com.grocery.management.model.User;
import com.grocery.management.repository.EmployeeRepository;
import com.grocery.management.utils.HelperMethods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final UserService userService;
    private final CashierService cashierService;
    @Autowired
    EmployeeService(EmployeeRepository employeeRepository, UserService userService, CashierService cashierService){
        this.userService = userService;
        this.employeeRepository = employeeRepository;
        this.cashierService = cashierService;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeByID(String employeeCode) {
        return employeeRepository.findByEmployeeId(employeeCode);
    }

    public Employee save(Employee employee){
        Employee newEmployee = employeeRepository.save(employee);

        if(employee.getDepartment().equals("Front End")) {
            Cashier newCashier = new Cashier();
            newCashier.setEmployeeEmail(newEmployee.getEmail());
            String posId = userService.getUnusedLoginId();
            String posPass =  String.valueOf((int)(Math.random() * 9000) + 1000);
            newCashier.setPosId(posId);
            newCashier.setPosPass(posPass);
            newCashier.setAuthority(employee.getAuthority());
            cashierService.save(newCashier);
        }

        User user = new User();
        user.setEmail(employee.getEmail());
        user.setPassword(HelperMethods.randomPasswordGenerator());
        user.setAuthority(employee.getAuthority());
        userService.save(user);

        return newEmployee;

    }

    public void deleteEmployeeByID(@PathVariable("id") String id) {
        employeeRepository.deleteById(id);
    }

    public void deleteAllEmployees() {
        employeeRepository.deleteAll();
    }
}
