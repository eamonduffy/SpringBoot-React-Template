package com.duffy.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource({ "classpath:application.properties", "classpath:application-secret.properties" })
@Profile("!production")
public class ProductionConfiguration {
    // Production-specific configurations
}