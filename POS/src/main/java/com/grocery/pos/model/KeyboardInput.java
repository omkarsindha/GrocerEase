package com.grocery.pos.model;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@Builder
public class KeyboardInput {
    private String code;
    private Double weight;
    private Double alternatePrice;
    private Double mfrCoupon;
    private boolean isMfrCoupon;
    private boolean isAlternate;
    private boolean isItemVoid;
    private boolean isCash;
    private boolean isDebitCredit;
}