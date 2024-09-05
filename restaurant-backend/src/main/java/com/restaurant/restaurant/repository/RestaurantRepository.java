package com.restaurant.restaurant.repository;

import com.restaurant.restaurant.entity.Restaurant;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    @Query(value = "select r.*, m.restaurant_id as menu_id from restaurant r inner join menus m on m.restaurant_id = r.restaurant_id where menu_item_name LIKE %:menuItemName%", nativeQuery = true)
    Page<Restaurant> findRestaurantByManuItem(Pageable pageable,@Param("menuItemName") String menuItemName);
}
