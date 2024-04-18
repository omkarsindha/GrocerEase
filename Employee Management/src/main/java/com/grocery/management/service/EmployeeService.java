package com.grocery.management.service;

import com.grocery.management.model.Cashier;
import com.grocery.management.model.Employee;
import com.grocery.management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import javax.sql.rowset.serial.SerialException;
import java.util.List;
import java.util.Random;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final CashierService cashierService;
    @Autowired
    EmployeeService(EmployeeRepository employeeRepository, CashierService cashierService){
        this.employeeRepository = employeeRepository;
        this.cashierService = cashierService;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeByID(String id) {
        return employeeRepository.findByEmployeeId(id);
    }

    public Employee save(Employee employee){
        if(employee.getPosition().equals("Cashier") || employee.getPosition().equals("Override")){
            employee.setDepartment("Front End");
        }
        else if(employee.getPosition().equals("Clerk")){
            employee.setDepartment("Back End");
        }
        Employee newEmployee = employeeRepository.save(employee);
        if(employee.getDepartment().equals("Front End")) {
            CreatePOSLogin(newEmployee);
        }
        return newEmployee;
    }

    public Employee update(String id, Employee updatedEmployee) throws SerialException {
        Employee existingEmployee = employeeRepository.findByEmployeeId(id);
        if (existingEmployee == null) {
            throw new SerialException("Employee not found with id: " + id);
        }
        existingEmployee.setName(updatedEmployee.getName());
        existingEmployee.setPosition(updatedEmployee.getPosition());
        String position = updatedEmployee.getPosition();
        if(existingEmployee.getDepartment().equals("Back End") && ( position.equals("Cashier") || position.equals("Override"))){
            existingEmployee.setDepartment("Front End");
            CreatePOSLogin(updatedEmployee);
        }
        return employeeRepository.save(existingEmployee);
    }

    public String getUnusedLoginId() {
        Random rand = new Random();
        int randomNumber = rand.nextInt(900) + 100;
        List<Cashier> cashiers = cashierService.getAllCashiers();
        for (Cashier cashier : cashiers) {
            if (cashier.getEmployeeId().equals(String.valueOf(randomNumber))) {
                return getUnusedLoginId();
            }
        }
        return String.valueOf(randomNumber);
    }

    public void deleteEmployeeByID(@PathVariable("id") String id) {
        employeeRepository.deleteById(id);
        cashierService.deleteCashierByID(id);
    }

    public void deleteAllEmployees() {
        employeeRepository.deleteAll();
    }

    private void CreatePOSLogin(Employee employee) {
        Cashier newCashier = new Cashier();
        newCashier.setEmployeeId(employee.getEmployeeId());
        String posId = getUnusedLoginId();
        String posPass =  String.valueOf((int)(Math.random() * 9000) + 1000);
        newCashier.setPosId(posId);
        newCashier.setPosPass(posPass);
        newCashier.setAuthority(employee.getAuthority());
        cashierService.save(newCashier);
    }

}
