package com.grocery.management.service;

import com.grocery.management.model.User;
import com.grocery.management.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Random;

@Service
public class UserService {

    private final UserRepository userRepository;
    UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserByID(String userCode) {
        return userRepository.findByUserId(userCode);
    }

    public User save(User cashier){
        userRepository.save(cashier);
        return(cashier);
    }

    public void deleteUserByID(@PathVariable("id") String id) {
        userRepository.deleteById(id);
    }

    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    public String getUnusedLoginId() {
        Random rand = new Random();
        int randomNumber = rand.nextInt(900) + 100;
        List<User> cashiers = getAllUsers();
        for (User cashier : cashiers) {
            if (cashier.getUserId().equals(String.valueOf(randomNumber))) {
                return getUnusedLoginId();
            }
        }
        return String.valueOf(randomNumber);
    }
}
