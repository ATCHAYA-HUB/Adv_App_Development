package com.home.home.repository;

import com.home.home.entity.Serviceentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {
    Serviceentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}

