package com.restaurant.restaurant.servicesImp;

import com.restaurant.restaurant.entity.User;
import com.restaurant.restaurant.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    public User updateUser(User user, Integer id) {
        return userRepo.findById(id)
                .map(newUser -> {
                    newUser.setFirstName(user.getFirstName());
                    newUser.setLastName(user.getLastName());
                    newUser.setEmail(user.getEmail());
                    newUser.setPassword(user.getPassword());
                    newUser.setPhone(user.getPhone());
                    return userRepo.save(newUser);
                }).orElse(null);
    }

    public User getUserById(Integer id) {
        Optional<User> userById = userRepo.findById(id);
        return userById.orElse(null);
    }

    public List<User> getAllUser() {
        return userRepo.findAll();
    }

    public String deleteUser(Integer id) {

        if (userRepo.existsById(id)) {
            userRepo.deleteById(id);
            return "Deleted!";
        }
        return "Not Found!";
    }

    public User getUserByEmail(String email) {
        Optional<User> emailOp = userRepo.findByEmail(email);
        return emailOp.orElse(null);
    }
}
