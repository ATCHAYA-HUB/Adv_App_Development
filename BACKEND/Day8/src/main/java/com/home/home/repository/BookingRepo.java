package com.home.home.repository;

import com.home.home.entity.Bookingentity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepo extends JpaRepository<Bookingentity, Long> {
    Bookingentity findByUsername(String username);
    void deleteByUsername(String username);
    // Other methods...
}

