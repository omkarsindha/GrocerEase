package com.grocery.pos.service;

import com.grocery.pos.model.Item;
import com.grocery.pos.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    private final ItemRepository itemRepository;
    ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public Item getItemByCode(String code){
        return itemRepository.findByItemCode(code);
    }
}
