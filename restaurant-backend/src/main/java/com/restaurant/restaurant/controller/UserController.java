package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.servicesImp.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth/user") // customer || restaurant-> manager|owner
public class UserController {

    private final UserService userService;

    @PostMapping("/editUser/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable("id") Integer id){
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
