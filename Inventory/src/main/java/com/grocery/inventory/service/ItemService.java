package com.grocery.inventory.service;

import com.grocery.inventory.exception.ServiceException;
import com.grocery.inventory.model.Item;
import com.grocery.inventory.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;
    ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItemByID(String itemCode) {
        return itemRepository.findByItemCode(itemCode);
    }

    public Item save(Item item) throws ServiceException {
        if(itemRepository.findByItemCode(item.getItemCode()) != null){
            throw new ServiceException("Item code already exists in database, you can update it if needed");
        }
        itemRepository.save(item);
        return(item);
    }

    public void deleteItemByID(@PathVariable("id") String id) {
        itemRepository.deleteById(id);
    }

    public void deleteAllItems() {
        itemRepository.deleteAll();
    }
}
