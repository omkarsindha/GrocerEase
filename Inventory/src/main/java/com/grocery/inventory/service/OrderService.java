package com.grocery.inventory.service;

import com.grocery.inventory.model.Order;
import com.grocery.inventory.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;

@Service
public class OrderService {

    OrderRepository orderRepository;
    @Autowired
    OrderService(OrderRepository orderRepository){
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderByID(String orderId) {
            return orderRepository.findByOrderId(orderId);
    }

    public List<Order> getOrderByItemCode(String itemCode) {
        return orderRepository.findByItemCode(itemCode);
    }

    public Order save(Order order){
        order.setOrderDate(System.currentTimeMillis());
        orderRepository.save(order);
        return(order);
    }

    public void deleteOrderByID(@PathVariable("id") String id) {
            orderRepository.deleteById(id);
    }

    public void deleteAllOrders() {
            orderRepository.deleteAll();
    }

}
