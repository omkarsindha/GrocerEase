package com.grocery.management.controller;

import com.grocery.management.model.Cashier;
import com.grocery.management.service.CashierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cashiers")
public class CashierController {
    private final CashierService cashierService;
    @Autowired
    CashierController(CashierService cashierService){
        this.cashierService = cashierService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Cashier>> getAllCashiers() {
        try {
            List<Cashier> cashiers = cashierService.getAllCashiers();
            if (cashiers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(cashiers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cashier> getCashierByID(@PathVariable String id) {
        try {
            Cashier Cashier = cashierService.getCashierByID(id);
            if (Cashier != null) {
                return new ResponseEntity<>(Cashier, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<?> createCashier(@RequestBody Cashier newCashier) {
        try {
            Cashier savedCashier = cashierService.save(newCashier);
            return new ResponseEntity<>(savedCashier, HttpStatus.CREATED);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCashier(@PathVariable("id") String id) {
        try {
            cashierService.deleteCashierByID(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Delete All Cashiers From Database
    @DeleteMapping("/")
    public ResponseEntity<HttpStatus> deleteAllCashiers() {
        try {
            cashierService.deleteAllCashiers();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
