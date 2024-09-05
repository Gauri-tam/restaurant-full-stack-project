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

    // restaurant data -> CURD http://localhost:8080/restaurant/getMenusByRest

    @PostMapping("/add")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantServiceImp.create(restaurant));
    }

    @GetMapping("/get")
    public ResponseEntity<Page<Restaurant>> getAllRestaurant(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                             @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(restaurantServiceImp.getAll(pageable));
    }

    @GetMapping("/getRestByMenu")
    public ResponseEntity<Page<Restaurant>> getRestByMenuName(@RequestParam(value = "pageNo", defaultValue = "0", required = false )Integer pageNo,
                                                              @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize,
                                                              @RequestParam(value = "MenuItemName", defaultValue = "") String menuItemName){
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(restaurantServiceImp.getRestByMenuItem(pageable, menuItemName));
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Restaurant> update(@RequestBody Restaurant restaurant, @PathVariable("Id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.update(restaurant, id));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Restaurant> getById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.getById(id));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.delete(id));
    }

    // menus data -> CURD

    @PostMapping("/addMenu")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menus) {
        return ResponseEntity.ok(menusServiceImp.createMenuItem(menus));
    }

    @GetMapping("/getMenus")
    public ResponseEntity<Page<Menus>> getAllMenus(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                   @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(menusServiceImp.getAllMenuItem(pageable));
    }

    @GetMapping("/getMenusByRest")
    public ResponseEntity<Page<Menus>> getMenuByRestName(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                         @RequestParam(value = "pageSize", defaultValue = "10", required = false) Integer pageSize,
                                                         @RequestParam(value = "restaurantName", defaultValue = "") String restaurantName) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(menusServiceImp.getMenuByRestName(pageable, restaurantName));
    }

    @PutMapping("/editMenu/{id}")
    public ResponseEntity<Menus> updateMenu(@RequestBody Menus menus, @PathVariable("id") Long id) {
        return ResponseEntity.ok(menusServiceImp.updateMenuItem(menus, id));
    }

    @GetMapping("/getMenu/{id}")
    public ResponseEntity<Menus> getMenuById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(menusServiceImp.getMenuItemById(id));
    }

    @DeleteMapping("deleteMenu/{id}")
    public ResponseEntity<String> deleteMenu(@PathVariable("id") Long id) {
        return ResponseEntity.ok(menusServiceImp.deleteMenuItem(id));
    }
}
