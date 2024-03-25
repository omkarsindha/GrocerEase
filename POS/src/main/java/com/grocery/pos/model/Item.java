package com.grocery.pos.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "items")
public class Item {
    @Id
    private String id;
    private String code;
    private String shortName;
    private String name;
    private Double price;
    private String type;
    private String sell_type;
}