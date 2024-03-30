package com.grocery.pos.service;

import com.grocery.pos.Exception.CartServiceException;
import com.grocery.pos.model.Item;
import com.grocery.pos.model.KeyboardInput;
import com.grocery.pos.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.undo.CannotRedoException;
import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    @Autowired
    ItemRepository itemRepository;
    ArrayList<Item> cart = new ArrayList<Item>();

    public List<Item> processKeyboardInput(KeyboardInput keyboardInput) throws CartServiceException{


        if (keyboardInput.getCode() != null){

            if (keyboardInput.isItemVoid()){
                String code = keyboardInput.getCode();
                Item item = itemRepository.findByCode(code).get(0);
                if(cart.contains(item)){
                    cart.remove(item);
                    return cart;
                } else {
                    throw new CartServiceException("Item not in cart");
                }
            }


            if (keyboardInput.isAlternate()){
                String code = keyboardInput.getCode();
                Item item = itemRepository.findByCode(code).get(0);
                item.setPrice(keyboardInput.getAlternatePrice());
                cart.add(item);
            }


            String code = keyboardInput.getCode();
            Item item = itemRepository.findByCode(code).get(0);
            cart.add(item);
            System.out.println("hi" + item);
        }

        // total logic remaining
        if(keyboardInput.isTotal()){
            return cart;
        }

        // cash logic remaining
        if (keyboardInput.isCash() || keyboardInput.isDebitCredit()){
            // printReceipt();
            cart = new ArrayList<Item>();
        }

        return cart;
    }
}
