package com.grocery.inventory.repository;

import java.util.List;

import com.grocery.inventory.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {
    Item findByItemCode(String code);

}