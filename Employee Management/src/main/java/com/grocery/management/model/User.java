package com.grocery.management.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.annotation.Collation;

@Data
@Collation("users")
public class User {
    @Id
    private String userId;
    private String email;
    private String password;
    private String authority;
}

