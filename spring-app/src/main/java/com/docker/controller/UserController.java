package com.docker.controller;

import com.docker.model.User;
import com.docker.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin()
public class UserController {

    private UserRepository userRepository;

    @GetMapping("/user/{id}")
    public User getUser(@PathVariable(value = "id") int id) {
        Optional<User> user = userRepository.findById((long)id);
        return user.orElse(new User());
    }
}
