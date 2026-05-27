package com.agro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class AgroApplication {
    public static void main(String[] args) {
        SpringApplication.run(AgroApplication.class, args);
    }
}

@RestController
@RequestMapping("/api")
class AgroController {

    @GetMapping("/status")
    public String status() {
        return "Sistema AgroTech funcionando 🚜🌱";
    }

    @GetMapping("/produtores")
    public String produtores() {
        return "Lista de produtores rurais conectados ao sistema.";
    }
}
