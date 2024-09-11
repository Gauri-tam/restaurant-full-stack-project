package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.entity.Restaurant;
import com.restaurant.restaurant.repository.MenusRepository;
import com.restaurant.restaurant.repository.RestaurantRepository;
import com.restaurant.restaurant.servicesImp.MenusServiceImp;
import com.restaurant.restaurant.servicesImp.RestaurantServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")  // user -> customer
@RequiredArgsConstructor
public class CustomerController {

    // http://localhost:8080/customer/**

    private  final RestaurantRepository restaurantRepository;

    private final MenusRepository menusRepository;

    private final RestaurantServiceImp restaurantServiceImp;

    private final MenusServiceImp menusServiceImp;

    // get all Restaurant // working -> react
    @GetMapping("/get")
    public ResponseEntity<Page<Restaurant>> getAllRestaurant(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                             @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(restaurantServiceImp.getAll(pageable));
    }

    // get all menus // working -> react
    @GetMapping("/getMenus")
    public ResponseEntity<Page<Menus>> getAllMenus(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                   @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(menusServiceImp.getAllMenuItem(pageable));
    }

    // Search Menu Items and Only get Menu Item  // working -> react
    @GetMapping("/manuItemName")
    public ResponseEntity<Page<Menus>> getOnlyMenuItem(@RequestParam(defaultValue = "0") Integer page,
                                                       @RequestParam(defaultValue = "10") Integer size,
                                                       @RequestParam String menuName) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(menusRepository.onlyGetMenuItem(pageable, menuName));
    }

    // Search Only Restaurant BY its Name  // working -> react
    @GetMapping("/restaurantName")
    public ResponseEntity<Page<Restaurant>> getOnlyRestaurant(@RequestParam(defaultValue = "0") Integer page,
                                                              @RequestParam(defaultValue = "10") Integer size,
                                                              @RequestParam String name ){
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(restaurantRepository.getOnlyRestaurant(pageable, name));
    }
}
