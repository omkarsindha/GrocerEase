package com.grocery.management.service;

import com.grocery.management.model.Cashier;
import com.grocery.management.repository.CashierRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Random;

@Service
public class CashierService {

    private final CashierRepository CashierRepository;
    CashierService(CashierRepository CashierRepository){
        this.CashierRepository = CashierRepository;
    }

    public List<Cashier> getAllCashiers() {
        return CashierRepository.findAll();
    }

    public Cashier getCashierByID(String employeeId) {
        return CashierRepository.findByEmployeeId(employeeId);
    }

    public Cashier save(Cashier cashier){
        CashierRepository.save(cashier);
        return(cashier);
    }

    public void deleteCashierByID(@PathVariable("id") String id) {
        CashierRepository.deleteById(id);
    }

    public void deleteAllCashiers() {
        CashierRepository.deleteAll();
    }

    public String getUnusedLoginId() {
        Random rand = new Random();
        int randomNumber = rand.nextInt(900) + 100;
        List<Cashier> cashiers = getAllCashiers();
        for (Cashier cashier : cashiers) {
            if (cashier.getEmployeeId().equals(String.valueOf(randomNumber))) {
                return getUnusedLoginId();
            }
        }
        return String.valueOf(randomNumber);
    }
}