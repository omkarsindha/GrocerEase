package com.grocery.inventory.service;

import com.grocery.inventory.exception.ServiceException;
import com.grocery.inventory.model.Item;
import com.grocery.inventory.model.Quantity;
import com.grocery.inventory.repository.ItemRepository;
import com.grocery.inventory.repository.QuantityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class QuantityService {


    private final QuantityRepository quantityRepository;
    private final ItemRepository itemRepository;
    @Autowired
    QuantityService(QuantityRepository quantityRepository,ItemRepository itemRepository){
        this.quantityRepository = quantityRepository;
        this.itemRepository = itemRepository;
    }

    public List<Quantity> getAllQuantities() {
        return quantityRepository.findAll();
    }

    public Quantity getQuantityByItemCode(String itemCode) {
        return quantityRepository.findByItemCode(itemCode);
    }

    public Quantity save(Quantity quantity) throws ServiceException {
        if(quantityRepository.findByItemCode(quantity.getItemCode()) != null){
            throw new ServiceException("Item quantity already exists in database");
        }
        Item item = itemRepository.findByItemCode(quantity.getItemCode());
        if(item == null){
            throw new ServiceException("Item not found");
        }
        quantity.setItemSellType(item.getSellType());
        quantityRepository.save(quantity);
        return(quantity);
    }

    public void deleteQuantityByID(@PathVariable("id") String id) {
        quantityRepository.deleteById(id);
    }

    public void deleteAllQuantities() {
        quantityRepository.deleteAll();
    }
    
}
