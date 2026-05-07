package com.unicalc.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Expose the 'syllabus' directory at the project root
        Path syllabusPath = Paths.get("syllabus");
        String syllabusAbsolutePath = syllabusPath.toFile().getAbsolutePath();
        
        registry.addResourceHandler("/syllabus/**")
                .addResourceLocations("file:/" + syllabusAbsolutePath + "/");
    }
}
