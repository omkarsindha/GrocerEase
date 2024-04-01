package com.grocery.inventory.repository;

import com.grocery.inventory.model.Supplier;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SupplierRepository extends MongoRepository<Supplier, String> {
    Supplier findBySupplierId(String supplierId);

    List<Supplier> findByProductsItemCode(String itemCode);

}
