package com.home.home.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Servicedto {
    private Long id;
    private String name;
    private String provider;
    private Integer price;
    private Integer duration;
    private String availability;
    private Integer noofdays;

}