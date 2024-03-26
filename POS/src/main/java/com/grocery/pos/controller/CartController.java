package com.grocery.pos.controller;


import com.grocery.pos.model.Item;
import com.grocery.pos.model.KeyboardInput;
import com.grocery.pos.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/code")
    public ResponseEntity<List<Item>> createItem(@RequestBody KeyboardInput keyboardInput) {
        try {
            List<Item> cart = cartService.processKeyboardInput(keyboardInput);
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
