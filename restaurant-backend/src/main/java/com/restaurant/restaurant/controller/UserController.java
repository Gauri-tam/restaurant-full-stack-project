package com.restaurant.restaurant.controller;

import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.servicesImp.LogoutService;
import com.restaurant.restaurant.servicesImp.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/auth/user") // customer || restaurant-> manager|owner  // http://localhost:8080/api/auth/user/getUser
public class UserController {

    private final UserService userService;

    private final LogoutService logoutService;

    @PostMapping("/editUser/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user,@PathVariable("id") Integer id){
        return ResponseEntity.ok(userService.updateUser(user, id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getUser")
    public ResponseEntity<List<User>> userList(){
        return ResponseEntity.ok(userService.getAllUser());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getEmailUser/{email}")
    public ResponseEntity<User> getUSerByEmail(@PathVariable("email") String email){
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getUser/{id}")
    public ResponseEntity<User> getUserById(Integer id){
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> deleteUser(Integer id){
        return ResponseEntity.ok(userService.deleteUser(id));
    }
}
