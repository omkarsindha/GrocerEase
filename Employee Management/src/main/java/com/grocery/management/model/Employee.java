package com.grocery.management.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document(collection = "employees")
public class Employee {
    @Id
    private String employeeId;
    private String name;
    private String email;
    private String position;
    private String authority;
    private String department;
}
