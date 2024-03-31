package com.grocery.inventory.service;

import com.grocery.inventory.model.Item;
import com.grocery.inventory.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ItemService {
    @Autowired
    ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItemByID(String ItemId) {
        return itemRepository.findByItemCode(ItemId).get(0);
    }

    public Item save(Item Item){
        itemRepository.save(Item);
        return(Item);
    }

    public void deleteItemByID(@PathVariable("id") String id) {
        itemRepository.deleteById(id);
    }

    public void deleteAllItems() {
        itemRepository.deleteAll();
    }
}
