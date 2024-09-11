package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.entity.Restaurant;
import com.restaurant.restaurant.servicesImp.MenusServiceImp;
import com.restaurant.restaurant.servicesImp.RestaurantServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurant")
@RequiredArgsConstructor
public class RestaurantController {

    private final RestaurantServiceImp restaurantServiceImp;

    private final MenusServiceImp menusServiceImp;

    // restaurant data -> CURD http://localhost:8080/restaurant/**

    // working -> react
    @PostMapping("/add")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantServiceImp.create(restaurant));
    }

    // working -> react
    @GetMapping("/get")
    public ResponseEntity<Page<Restaurant>> getAllRestaurant(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                             @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(restaurantServiceImp.getAll(pageable));
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Restaurant> update(@RequestBody Restaurant restaurant, @PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.update(restaurant, id));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.delete(id));
    }

    // menus data -> CURD

    // working -> react
    @PostMapping("/addMenu")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menus) {
        return ResponseEntity.ok(menusServiceImp.createMenuItem(menus));
    }

    // working -> react
    @GetMapping("/getMenus")
    public ResponseEntity<Page<Menus>> getAllMenus(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                   @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(menusServiceImp.getAllMenuItem(pageable));
    }

    @PutMapping("/editMenu/{id}")
    public ResponseEntity<Menus> updateMenu(@RequestBody Menus menus, @PathVariable("id") Long id) {
        return ResponseEntity.ok(menusServiceImp.updateMenuItem(menus, id));
    }

    @DeleteMapping("deleteMenu/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable("id") Long id) {
        return ResponseEntity.ok(menusServiceImp.deleteMenuItem(id));
    }
}
