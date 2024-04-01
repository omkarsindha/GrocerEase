package com.grocery.inventory.controller;

import com.grocery.inventory.exception.ServiceException;
import com.grocery.inventory.model.Quantity;
import com.grocery.inventory.service.QuantityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quantities")
public class QuantityController {

    private final QuantityService quantityService;
    @Autowired
    QuantityController(QuantityService quantityService){
        this.quantityService = quantityService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Quantity>> getAllQuantities() {
        try {
            List<Quantity> quantities = quantityService.getAllQuantities();
            if (quantities.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(quantities, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{itemCode}")
    public ResponseEntity<Quantity> getQuantityByID(@PathVariable String itemCode) {
        try {
            Quantity Quantity = quantityService.getQuantityByItemCode(itemCode);
            if (Quantity != null) {
                return new ResponseEntity<>(Quantity, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/")
    public ResponseEntity<?> createQuantity(@RequestBody Quantity newQuantity) {
        try {
            Quantity savedQuantity = quantityService.save(newQuantity);
            return new ResponseEntity<>(savedQuantity, HttpStatus.CREATED);
        } catch (ServiceException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteQuantity(@PathVariable("id") String id) {
        try {
            quantityService.deleteQuantityByID(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //Delete All Quantities From Database
    @DeleteMapping("/")
    public ResponseEntity<HttpStatus> deleteAllQuantities() {
        try {
            quantityService.deleteAllQuantities();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
