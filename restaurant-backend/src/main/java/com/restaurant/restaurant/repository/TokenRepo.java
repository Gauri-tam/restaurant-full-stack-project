package com.restaurant.restaurant.repository;

import com.restaurant.restaurant.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface TokenRepo extends JpaRepository<Token, Integer> {

    Optional<Token> findUserByToken(String Token);

    @Query(value = "select t from Token t inner join User u on t.user.id = u.userId where u.userId = :userId and (t.expire = false or t.revoked = false )")
    List<Token> findTokenByUserId(@Param("userId") Integer userId);
}
