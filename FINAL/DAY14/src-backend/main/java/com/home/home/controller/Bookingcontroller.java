package com.home.home.controller;


import com.home.home.dto.Bookingdto;
import com.home.home.service.Bookingservice;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="*")

@RestController
@RequestMapping("/booking")
public class Bookingcontroller {

    private final Bookingservice bookingservice;

    public Bookingcontroller(Bookingservice bookingservice) {
        this.bookingservice = bookingservice; 
    }

    @GetMapping
    public ResponseEntity<List<Bookingdto>> getAllServices() {
        List<Bookingdto> services = bookingservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Bookingdto> getServiceByName(@PathVariable String username) {
        Bookingdto service = bookingservice.getServiceByName(username);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Bookingdto> createService(@RequestBody Bookingdto service) {
        Bookingdto createdService = bookingservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{username}")
    public ResponseEntity<Bookingdto> updateServiceByName(@PathVariable String username, @RequestBody Bookingdto updatedService) {
        Bookingdto updatedServiceDto = bookingservice.updateServiceByName(username, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String username) {
        bookingservice.deleteServiceByName(username);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}