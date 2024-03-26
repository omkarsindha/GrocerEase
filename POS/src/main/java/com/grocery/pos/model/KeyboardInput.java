package com.grocery.pos.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Builder
@Document(collection = "items")
public class KeyboardInput {
    private String code;
    private String weight;
    private String alternatePrice;
    private Double mfrCoupon;
    private String itemVoid;
    private boolean total;
    private boolean cash;
    private boolean debitCredit;
}