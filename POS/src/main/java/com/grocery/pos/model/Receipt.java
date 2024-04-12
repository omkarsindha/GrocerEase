package com.grocery.pos.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Builder
@Document(collection = "receipts")
public class Receipt {
    @Id
    private String receiptId;
    private Double totalAmount;
    private List<Item> items;
    private String paymentType;
    // Add more fields or methods as needed
}
