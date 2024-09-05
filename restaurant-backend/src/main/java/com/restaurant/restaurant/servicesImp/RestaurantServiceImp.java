package com.restaurant.restaurant.servicesImp;


import com.restaurant.restaurant.entity.Restaurant;
import com.restaurant.restaurant.repository.RestaurantRepository;
import com.restaurant.restaurant.services.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RestaurantServiceImp implements RestaurantService {

    private final RestaurantRepository restaurantRepository;

    @Override
    public Restaurant create(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public Page<Restaurant> getAll(Pageable pageable) {
        return restaurantRepository.findAll(pageable);
    }

    @Override
    public Restaurant update(Restaurant restaurant, Long id) {
        return restaurantRepository.findById(id).map(newRestaurant -> {
            newRestaurant.setRestaurantName(restaurant.getRestaurantName());
            return restaurantRepository.save(newRestaurant);
        }).orElse(null);
    }

    @Override
    public Restaurant getById(Long id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);
        return restaurant.orElse(null);
    }

    @Override
    public String delete(Long id) {
        if (restaurantRepository.existsById(id)) {
            restaurantRepository.deleteById(id);
            return "Deleted!";
        }
        return "Not Found!";
    }

    @Override
    public Page<Restaurant> getRestByMenuItem(Pageable pageable, String menuItemName) {
        return restaurantRepository.findRestaurantByManuItem(pageable,menuItemName);
    }
}
