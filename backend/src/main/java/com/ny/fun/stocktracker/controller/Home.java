package com.ny.fun.stocktracker.controller;

import com.ny.fun.stocktracker.dto.ResponseHome;
import com.ny.fun.stocktracker.persistance.User_Info;
import com.ny.fun.stocktracker.persistance.User_InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Home {

    @Autowired
    private User_InfoRepository user_infoRepository;


    @RequestMapping(value = "/api/home" , method = RequestMethod.GET, produces = "application/json")
    public Object[] getHome() {

        List<User_Info> listOfUsers = user_infoRepository.findAll();

        ResponseHome response = new ResponseHome();
        response.setData(new String[]{"ListOfUser = "+listOfUsers.get(0).getFirst_name()+" Greetings from Spring Boot API home!", HttpStatus.ACCEPTED.toString()});
        return new ResponseHome[]{response};
    }
}
