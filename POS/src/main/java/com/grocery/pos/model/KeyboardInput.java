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
    private Double alternatePrice;
    private Double mfrCoupon;
    private boolean isAlternate;
    private boolean isItemVoid;
    private boolean isTotal;
    private boolean isCash;
    private boolean isDebitCredit;
}