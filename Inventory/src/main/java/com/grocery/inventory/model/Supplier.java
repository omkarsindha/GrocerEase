package com.grocery.inventory.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Builder
@Document(collection = "suppliers")
public class Supplier {
    @Id
    private String supplierId;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;
    private List<Item> products;
}