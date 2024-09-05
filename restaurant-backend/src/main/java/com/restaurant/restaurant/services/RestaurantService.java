package com.restaurant.restaurant.services;


import com.restaurant.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface RestaurantService {

    public Restaurant create(Restaurant restaurant);
    public Page<Restaurant> getAll(Pageable pageable);

    public Restaurant update(Restaurant restaurant, Long id);

    public Restaurant getById(Long id);

    public String delete(Long id);

    public Page<Restaurant> getRestByMenuItem(Pageable pageable, String menuItemName);
}
