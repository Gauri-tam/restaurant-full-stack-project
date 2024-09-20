package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.entity.Restaurant;
import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.jwtRequest.UserRegisterRequest;
import com.restaurant.restaurant.jwtResponse.UserRegisterResponse;
import com.restaurant.restaurant.servicesImp.MenusServiceImp;
import com.restaurant.restaurant.servicesImp.RestaurantServiceImp;
import com.restaurant.restaurant.servicesImp.SuperAdminCEOService;
import com.restaurant.restaurant.servicesImp.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
@RequiredArgsConstructor

// super_Admin
public class SuperAdminController {

    private final SuperAdminCEOService superAdminCEOService;

    private final RestaurantServiceImp restaurantServiceImp;

    private final MenusServiceImp menusServiceImp;

    private final UserService userService;

    // create Manager

    @PostMapping("/addRestaurantUser")
    public ResponseEntity<UserRegisterResponse> restaurantUserRegistration(@Valid @RequestBody UserRegisterRequest request, HttpServletRequest req) {
        return ResponseEntity.ok(superAdminCEOService.restaurantUserRegistration(request, req));
    }

    @PostMapping("/addCustomer")
    public ResponseEntity<UserRegisterResponse> customerRegistration(@Valid @RequestBody UserRegisterRequest request, HttpServletRequest req) {
        return ResponseEntity.ok(superAdminCEOService.customerRegistration(request, req));
    }

    // restaurant data -> CURD

    @PostMapping("/addRestaurant")
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantServiceImp.create(restaurant));
    }

    @GetMapping("/get")
    public ResponseEntity<Page<Restaurant>> getAllRestaurant(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                             @RequestParam(value = "pageSize", defaultValue = "20", required = false) Integer pageSize){
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(restaurantServiceImp.getAll(pageable));
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Restaurant> update(@RequestBody Restaurant restaurant, @PathVariable("Id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.update(restaurant, id));
    }

    @GetMapping("/getRest/{id}")
    public ResponseEntity<Restaurant> getById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.getById(id));
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(restaurantServiceImp.delete(id));
    }

    // menus data -> CURD

    @PostMapping("/addMenu")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menus ) {
        return ResponseEntity.ok(menusServiceImp.createMenuItem( menus));
    }

    @GetMapping("/getMenus")
    public ResponseEntity<Page<Menus>> getAllMenus(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                   @RequestParam(value = "pageSize", defaultValue = "20", required = false) Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        return ResponseEntity.ok(menusServiceImp.getAllMenuItem(pageable));
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

    @PostMapping("/editUser/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("id") Integer id){
        return ResponseEntity.ok(userService.updateUser(user, id));
    }

    @GetMapping("/getUser")
    public ResponseEntity<List<User>> userList(){
        return ResponseEntity.ok(userService.getAllUser());
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(Integer id){
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @DeleteMapping("deleteUser/{id}")
    public ResponseEntity<String> deleteUser(Integer id){
        return ResponseEntity.ok(userService.deleteUser(id));
    }
}
