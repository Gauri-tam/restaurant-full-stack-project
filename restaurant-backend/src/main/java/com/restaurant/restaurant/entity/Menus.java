package com.restaurant.restaurant.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "menus")
public class Menus {

    @Id
    @NotNull(message = "MenuItem id not be null!")
    private Long menuItemId;
    private String menuItemName;
    private Double menuItemPrice;
    private String menuItemDescription;
    private String menuItemImage;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
}
