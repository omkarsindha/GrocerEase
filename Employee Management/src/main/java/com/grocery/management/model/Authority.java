package com.grocery.management.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.annotation.Collation;

@Data
@Collation("authorities")
public class Authority {
    @Id
    public String authorityId;
    public String authority;

}
