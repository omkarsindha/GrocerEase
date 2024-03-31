package com.grocery.inventory.repository;

import java.util.List;

import com.grocery.inventory.model.Item;
import com.grocery.inventory.model.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByOrderId(String order_id);

}