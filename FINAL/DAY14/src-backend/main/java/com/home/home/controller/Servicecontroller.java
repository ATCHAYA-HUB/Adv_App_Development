package com.home.home.controller;

import com.home.home.dto.Servicedto;
import com.home.home.service.Serviceservice;

import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/services")
public class Servicecontroller {

    private final Serviceservice serviceservice;

    public Servicecontroller(Serviceservice serviceservice) {
        this.serviceservice = serviceservice;
    }
    @Tag(name="Get services", description="endpoint getting all services posted by admin")
    @GetMapping
    public ResponseEntity<List<Servicedto>> getAllServices() {
        List<Servicedto> services = serviceservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Servicedto> getServiceByName(@PathVariable String name) {
        Servicedto service = serviceservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Servicedto> createService(@RequestBody Servicedto service) {
        Servicedto createdService = serviceservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<Servicedto> updateServiceByName(@PathVariable String name, @RequestBody Servicedto updatedService) {
        Servicedto updatedServiceDto = serviceservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        serviceservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}