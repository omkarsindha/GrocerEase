package com.grocery.pos.service;

import com.grocery.pos.model.Item;
import com.grocery.pos.model.KeyboardInput;
import com.grocery.pos.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    @Autowired
    ItemRepository itemRepository;
    ArrayList<Item> cart = new ArrayList<Item>();

    public List<Item> processKeyboardInput(KeyboardInput keyboardInput){

        if (keyboardInput.getCode() != null){
            String code = keyboardInput.getCode();
            Item item = itemRepository.findByCode(code).get(0);
            cart.add(item);
            System.out.println("hi" + item);
        }



        if(keyboardInput.isTotal()){
            System.out.println("hi");
        }

        if (keyboardInput.isCash() || keyboardInput.isDebitCredit()){
            cart = new ArrayList<Item>();
            System.out.println("Cashed Out");
        }

        return cart;
    }
}
