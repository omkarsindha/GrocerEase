package com.grocery.pos.controller;


import com.grocery.pos.Exception.CartServiceException;
import com.grocery.pos.model.Item;
import com.grocery.pos.model.KeyboardInput;
import com.grocery.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET})
public class ItemController {

    private final ItemService itemService;
    @Autowired
    ItemController(ItemService itemService){
        this.itemService = itemService;
    }

    @GetMapping("/{code}")
    public ResponseEntity<Item> getItemByCode(@PathVariable String code) {
        try {
            Item Item = itemService.getItemByCode(code);
            if (Item != null) {
                return new ResponseEntity<>(Item, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
