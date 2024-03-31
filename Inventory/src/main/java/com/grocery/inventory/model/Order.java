package com.grocery.inventory.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@Builder
@Document(collection = "orders")
public class Order {
    @Id
    private String order_id;
    private String supplier;
    private Item item;
    private int Quantity;
    private Double weight;
    private Double price;
}