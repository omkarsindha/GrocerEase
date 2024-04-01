package com.grocery.inventory.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "quantities")
public class Quantity{
    @Id
    private String quantityId;
    private String itemCode;
    private String itemSellType;
    private Double quantity;
}