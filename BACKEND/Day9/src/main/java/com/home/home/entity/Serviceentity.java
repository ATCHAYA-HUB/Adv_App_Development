package com.home.home.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "adminservice")
public class Serviceentity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "provider",nullable = false)
    private String provider;

    @Column(name = "price",nullable = false)
    private Integer price;

    @Column(name = "duration",nullable = false)
    private Integer duration;

    @Column(name = "availability",nullable = false)
    private String availability;

    @Column(name = "noofdays",nullable = false)
    private Integer noofdays;

}
