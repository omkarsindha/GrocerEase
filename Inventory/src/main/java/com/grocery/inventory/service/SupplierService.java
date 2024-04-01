package com.grocery.inventory.service;

import com.grocery.inventory.model.Supplier;
import com.grocery.inventory.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;
    @Autowired
    SupplierService(SupplierRepository supplierRepository){
        this.supplierRepository = supplierRepository;
    }

    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    public Supplier getSupplierByID(String supplierID) {
        return supplierRepository.findBySupplierId(supplierID);
    }
    public List<Supplier> getSupplierByItemCode(String itemCode) {
        return supplierRepository.findByProductsItemCode(itemCode);
    }

    public Supplier save(Supplier supplier){
        supplierRepository.save(supplier);
        return(supplier);
    }

    public void deleteSupplierByID(@PathVariable("id") String id) {
        supplierRepository.deleteById(id);
    }

    public void deleteAllSuppliers() {
        supplierRepository.deleteAll();
    }

}

