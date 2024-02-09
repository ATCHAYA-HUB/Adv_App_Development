package com.home.home.mapper;



import com.home.home.dto.Bookingdto;
import com.home.home.entity.Bookingentity;

public class Bookingmapper {

    public static Bookingdto maptoServicedto(Bookingentity bookingentity) {
        // Implement the mapping logic
        return new Bookingdto(
                bookingentity.getId(),
                bookingentity.getUsername(),
                bookingentity.getEmail(),
                bookingentity.getPhonenumber(),
                bookingentity.getDate(),
                bookingentity.getServicetype()
              
        );
    }

    public static Bookingentity maptoServiceentity(Bookingdto bookingdto) {
        // Implement the mapping logic
        return new Bookingentity(
                bookingdto.getId(),
                bookingdto.getUsername(),
                bookingdto.getEmail(),
                bookingdto.getPhonenumber(),
                bookingdto.getDate(),
                bookingdto.getServicetype ()
                
        );
    }
}



