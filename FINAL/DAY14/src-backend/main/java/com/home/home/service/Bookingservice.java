package com.home.home.service;


import com.home.home.dto.Bookingdto;
import com.home.home.entity.Bookingentity;
import com.home.home.mapper.Bookingmapper;
import com.home.home.repository.BookingRepo;


import jakarta.transaction.Transactional;



import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class  Bookingservice {

    private final BookingRepo bookingRepo;

    public Bookingservice(BookingRepo bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public List<Bookingdto> getAllServices() {
        List<Bookingentity> services = bookingRepo.findAll();
        return services.stream()
                .map(Bookingmapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Bookingdto getServiceByName(String username) {
        Bookingentity bookingentity = bookingRepo.findByUsername(username);
        return Bookingmapper.maptoServicedto(bookingentity);
    }

    public Bookingdto createService(Bookingdto bookingdto) {
        Bookingentity serviceentity = Bookingmapper.maptoServiceentity(bookingdto);
        serviceentity = bookingRepo.save(serviceentity);
        return Bookingmapper.maptoServicedto(serviceentity);
    }

    public Bookingdto updateServiceByName(String username, Bookingdto updatedServicedto) {
        Bookingentity existingService = bookingRepo.findByUsername(username);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setEmail(updatedServicedto.getEmail());
            existingService.setPhonenumber(updatedServicedto.getPhonenumber());
            existingService.setDate(updatedServicedto.getDate());
            existingService.setServicetype(updatedServicedto.getServicetype());
            

            existingService = bookingRepo.save(existingService);
            return Bookingmapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String username) {
        bookingRepo.deleteByUsername(username);
    }
}
