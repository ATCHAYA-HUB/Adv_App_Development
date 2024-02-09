package com.home.home;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Harmony At Home",
				version = "1.1.2",
				description = "Care at your place",
				contact = @Contact(
						name = "Janani Srinivasan",
						email = "jananisrini52@gmail.com"
						)
				)
		)
public class HomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeApplication.class, args);
	}

}
