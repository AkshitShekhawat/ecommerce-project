package com.ecommerce.project.payload;

import com.ecommerce.project.model.Address;
import lombok.Data;

import java.util.Map;

@Data
public class StripePaymentDto {
    private Long amount;
    private String currency;
}