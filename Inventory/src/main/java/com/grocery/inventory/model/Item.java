package com.grocery.inventory.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "items")
public class Item {
    @Id
    private String item_id;
    private String code;
    private String shortName;
    private String name;
    private Double price;
    private String type;
    private String sell_type;
}