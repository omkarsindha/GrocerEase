package com.grocery.pos.repository;

import java.util.List;

import com.grocery.pos.model.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<Item, String> {
    Item findByItemCode(String code);

}