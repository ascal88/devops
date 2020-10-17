package it.reply.devops;


import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.web.bind.annotation.RestController
public class RestController {

    @GetMapping(value = "/hello")
    public String hello() {
        return  "Hello World";
    }

}
