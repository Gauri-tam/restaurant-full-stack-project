package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.servicesImp.MenusServiceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/restaurant/menus")
@RequiredArgsConstructor
public class MenusController {

    private final MenusServiceImp menusServiceImp;

    @PostMapping("/addMenu")
    public ResponseEntity<Menus> createMenu(@RequestBody Menus menus) {
        return ResponseEntity.ok(menusServiceImp.createMenuItem(menus));
    }

    @GetMapping("/getMenus")
    public ResponseEntity<Page<Menus>> getAllMenus(@RequestParam(value = "pageNo", defaultValue = "0", required = false) Integer pageNo,
                                                   @RequestParam(value = "pageSize", defaultValue = "5", required = false) Integer pageSize) {
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
}
