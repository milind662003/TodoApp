package com.milind.todoApp.authenticator;

import org.springframework.boot.origin.Origin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @GetMapping(path = "/basicauth")
    public String basicAuthCheck() {
        return "Success";
    }

}
