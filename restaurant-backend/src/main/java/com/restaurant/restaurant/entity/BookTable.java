package com.restaurant.restaurant.entity;

import com.restaurant.restaurant.enumarate.LunchType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BookTable {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private Long tableId;
    private Long guests;
    private LunchType lunchType;

}
