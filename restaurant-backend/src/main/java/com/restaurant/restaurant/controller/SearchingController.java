package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.entity.Restaurant;
import com.restaurant.restaurant.repository.MenusRepository;
import com.restaurant.restaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.availability.ReadinessState;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurant")
public class SearchingController {

    private final RestaurantRepository restaurantRepository;
    private final MenusRepository menusRepository;

    //http://localhost:8080/restaurant/**/search


//    // 1. Search Restaurants by Menu Item with Pagination
//    @GetMapping("/menu/search")
//    public ResponseEntity<Page<Restaurant>> searchRestaurantsByMenuItem(
//            @RequestParam String menuItem,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Restaurant> restaurants = restaurantRepository.findByMenuItem(menuItem, pageable);
//
//        return ResponseEntity.ok(restaurants);
//    }
//
//    // 2. Search Menu Items by Restaurant with Pagination
//    @GetMapping("/name/search")
//    public ResponseEntity<Page<Menus>> searchMenuByRestaurant(
//            @RequestParam String restaurantName,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Menus> menus = menusRepository.findByRestaurantName(restaurantName, pageable);
//
//        return ResponseEntity.ok(menus);
//    }

    // 3. Search Menu Items and Only get Menu Item // working -> react
    @GetMapping("/manuItemName")
    public ResponseEntity<Page<Menus>> getOnlyMenuItem(@RequestParam(defaultValue = "0") Integer page,
                                                       @RequestParam(defaultValue = "10") Integer size,
                                                       @RequestParam String menuName) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(menusRepository.onlyGetMenuItem(pageable, menuName));
    }

    // 4. Search Only Restaurant BY its Name // working -> react
    @GetMapping("/restaurantName")
    public ResponseEntity<Page<Restaurant>> getOnlyRestaurant(@RequestParam(defaultValue = "0") Integer page,
                                                        @RequestParam(defaultValue = "10") Integer size,
                                                        @RequestParam String name ){
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(restaurantRepository.getOnlyRestaurant(pageable, name));
    }
}
