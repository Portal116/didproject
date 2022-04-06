package com.ojt.did;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class DidApplication {

    public static void main(String[] args) {
        SpringApplication.run(DidApplication.class, args);
        System.out.println("run");
    }

}
