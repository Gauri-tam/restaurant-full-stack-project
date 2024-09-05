package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.entity.Menus;
import com.restaurant.restaurant.repository.MenusRepository;
import com.restaurant.restaurant.services.MenusService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MenusServiceImp implements MenusService {

    private final MenusRepository menusRepository;

    @Override
    public Menus createMenuItem(Menus menus) {
        return menusRepository.save(menus);
    }

    @Override
    public Menus updateMenuItem(Menus menus, Long id) {
        return menusRepository.findById(id).map(newMenu -> {
           newMenu.setMenuItemName(menus.getMenuItemName());
           newMenu.setMenuItemDescription(menus.getMenuItemDescription());
           newMenu.setMenuItemPrice(menus.getMenuItemPrice());
           newMenu.setMenuItemImage(menus.getMenuItemImage());
           return menusRepository.save(newMenu);
        }).orElse(null);
    }

    @Override
    public Menus getMenuItemById(Long id) {
        Optional<Menus> menus = menusRepository.findById(id);
        return menus.orElse(null);
    }

    @Override
    public String deleteMenuItem(Long id) {
        if (menusRepository.existsById(id)){
            menusRepository.deleteById(id);
            return "deleted";
        }
        return "Not Found!";
    }

    @Override
    public Page<Menus> getAllMenuItem(Pageable pageable) {
        return menusRepository.findAll(pageable);
    }

    @Override
    public Page<Menus> getMenuByRestName(Pageable pageable, String restaurantName) {
        return menusRepository.findByRestaurantName(pageable, restaurantName);
    }
}
