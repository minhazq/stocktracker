package com.ny.fun.stocktracker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}