package com.grocery.inventory.repository;

import com.grocery.inventory.model.Item;
import com.grocery.inventory.model.Quantity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuantityRepository extends MongoRepository<Quantity,String> {
    Quantity findByItemCode(String itemCode);
}
