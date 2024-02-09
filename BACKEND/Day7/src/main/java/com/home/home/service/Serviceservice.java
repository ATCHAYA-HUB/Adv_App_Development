package com.home.home.service;

import com.home.home.dto.Servicedto;
import com.home.home.entity.Serviceentity;
import com.home.home.mapper.Servicemapper;
import com.home.home.repository.ServiceRepo;

import jakarta.transaction.Transactional;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String name) {
        Serviceentity serviceentity = serviceRepo.findByName(name);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String name, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setProvider(updatedServicedto.getProvider());
            existingService.setPrice(updatedServicedto.getPrice());
            existingService.setDuration(updatedServicedto.getDuration());
            existingService.setAvailability(updatedServicedto.getAvailability());
            existingService.setNoofdays(updatedServicedto.getNoofdays());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String name) {
        serviceRepo.deleteByName(name);
    }
}
