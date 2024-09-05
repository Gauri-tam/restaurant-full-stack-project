package com.restaurant.restaurant.repository;

import com.restaurant.restaurant.entity.Menus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface MenusRepository extends JpaRepository<Menus, Long> {

    @Query(value = "select m.*, r.restaurant_id as rest_id, r.restaurant_name as rest_name from menus m inner join restaurant r on m.restaurant_id = r.restaurant_id where r.restaurant_name = :restaurantName", nativeQuery = true)
    Page<Menus> findByRestaurantName(Pageable pageable, @Param("restaurantName") String restaurantName);

}
