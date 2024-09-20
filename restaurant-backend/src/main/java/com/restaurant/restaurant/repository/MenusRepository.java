package com.restaurant.restaurant.repository;

import com.restaurant.restaurant.entity.Menus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface MenusRepository extends JpaRepository<Menus, Long> {

    @Query(value = "SELECT * FROM menus m  WHERE m.restaurant_id = :restId ", nativeQuery = true)
    List<Menus> getMenuByRestId(@Param("restId") Long restId);

    @Query(value = "select m.*, r.restaurant_id as rest_id, r.restaurant_name as rest_name from menus m inner join restaurant r on m.restaurant_id = r.restaurant_id where r.restaurant_name = :restaurantName", nativeQuery = true)
    Page<Menus> findByRestaurantName(Pageable pageable, @Param("restaurantName") String restaurantName);

    // Search for menu items by restaurant name
    @Query(value = "SELECT m.*, r.restaurant_id as rest_id, r.restaurant_name as rest_name FROM menus m INNER JOIN restaurant r ON m.restaurant_id = r.restaurant_id WHERE r.restaurant_name LIKE %:restaurantName%", nativeQuery = true)
    Page<Menus> findByRestaurantName(@Param("restaurantName") String restaurantName, Pageable pageable);

    @Query(value ="SELECT  m.* FROM menus m WHERE m.menu_item_name like %:menuName%" , nativeQuery = true)
    Page<Menus> onlyGetMenuItem(Pageable pageable,@Param("menuName") String menuName);
}
