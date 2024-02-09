package com.home.home.mapper;

import com.home.home.dto.Servicedto;
import com.home.home.entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getProvider(),
                serviceentity.getPrice(),
                serviceentity.getDuration(),
                serviceentity.getAvailability(),
                serviceentity.getNoofdays()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getProvider(),
                servicedto.getPrice(),
                servicedto.getDuration(),
                servicedto.getAvailability(),
                servicedto.getNoofdays()
        );
    }
}
