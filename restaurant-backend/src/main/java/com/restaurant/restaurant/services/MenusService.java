package com.restaurant.restaurant.services;

import com.restaurant.restaurant.entity.Menus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MenusService {

    public Menus createMenuItem(Menus menus);

    public Menus updateMenuItem(Menus menus, Long id);

    public Menus getMenuItemById(Long id);

    public String deleteMenuItem(Long id);

    public Page<Menus> getAllMenuItem(Pageable pageable);

    public Page<Menus> getMenuByRestName(Pageable pageable, String restaurantName);
}
