package com.grocery.management.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.annotation.Collation;

@Data
@Collation("cashiers")
public class Cashier {
    @Id
    private String employeeId;
    private String posId;
    private String posPass;
    private String authority;
}
