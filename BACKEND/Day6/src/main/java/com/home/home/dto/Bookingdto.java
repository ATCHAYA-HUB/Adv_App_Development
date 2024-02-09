package com.home.home.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookingdto {
    private Long id;
    private String username;
    private String email;
    private String phonenumber;
    private String date;
    private String servicetype;

}
