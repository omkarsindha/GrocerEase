package com.grocery.management.repository;

import com.grocery.management.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User,String> {
    User findByUserId(String userId);
}
