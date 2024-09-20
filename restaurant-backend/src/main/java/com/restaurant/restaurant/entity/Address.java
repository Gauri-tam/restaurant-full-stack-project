package com.restaurant.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Address {
    @Id
    @NotNull(message = "Address id not be null!")
    private Integer addressId;
    private Integer restaurantPincode;
    private String restaurantCity;
    private String restaurantState;

    @JsonIgnore
    @OneToOne(mappedBy = "address")
    private Restaurant restaurant;
}
