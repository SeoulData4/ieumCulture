package com.squad.ieumculture;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class IeumCultureApplication {

    public static void main(String[] args) {
        SpringApplication.run(IeumCultureApplication.class, args);
    }

}
