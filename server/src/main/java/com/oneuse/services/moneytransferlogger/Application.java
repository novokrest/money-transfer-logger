package com.oneuse.services.moneytransferlogger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.oneuse.services.moneytransferlogger.config.ApplicationConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(ApplicationConfig.class)
@SpringBootApplication
public class Application {

    public static void main(String[] args) throws JsonProcessingException {
        SpringApplication.run(Application.class, args);
    }
}
