package com.grocery.inventory.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "orders")
public class Order {
    @Id
    private String orderId;
    private String supplier;
    //date are in unix time stamp
    private long orderDate;
    private long deliveredDate;
    private Boolean isDelivered;
    private String itemCode;
    private String itemSellType;
    //quantity is kg if price is by weight and units if price is by each
    private double Quantity;
    private Double price;
}