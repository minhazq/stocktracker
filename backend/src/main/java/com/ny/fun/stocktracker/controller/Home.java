package com.ny.fun.stocktracker.controller;

import com.ny.fun.stocktracker.dto.ResponseHome;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Home {

    @RequestMapping(value = "/api/home" , method = RequestMethod.GET, produces = "application/json")
    public Object getHome() {
        ResponseHome response = new ResponseHome();
        response.setData(new String[]{"Greetings from Spring Boot API home!", HttpStatus.ACCEPTED.toString()});
        return response;
    }
}
