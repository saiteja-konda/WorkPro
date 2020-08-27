package dev.teja.projectboard;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@OpenAPIDefinition(info = @Info(
        title = "Project Task Board",
        version = "1.0",
        description = "This is an Back-end REST API for 'Project Task Board Application' which helps in better Project Management"))
@SpringBootApplication
public class ProjectboardApplication {

    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        SpringApplication.run(ProjectboardApplication.class, args);
    }

}
