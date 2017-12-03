package com.oneuse.services.moneytransferlogger.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.oneuse.services.moneytransferlogger.config.properties.FrontendProperties;
import com.oneuse.services.moneytransferlogger.domain.TransferStatus;
import com.oneuse.services.moneytransferlogger.entity.TransferEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

import java.time.ZonedDateTime;

@Import({
        FrontendProperties.class,
        CorsRegistryConfigurer.class
})
@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

    @Autowired
    CorsRegistryConfigurer corsRegistryConfigurer;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration configuration) {
        configuration.exposeIdsFor(TransferEntity.class);
        corsRegistryConfigurer.configureCors(configuration.getCorsRegistry());
    }

    @Bean
    public ObjectMapper objectMapper() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.findAndRegisterModules();


        TransferEntity entity = new TransferEntity();
        entity.setId(1L);
        entity.setAmount(10000L);
        entity.setSource("source");
        entity.setDestination("destination");
        entity.setCreatedDateTime(ZonedDateTime.now());
        entity.setUpdatedDateTime(ZonedDateTime.now());
        entity.setStatus(TransferStatus.SUCCESS);

        String value = mapper.writeValueAsString(entity);

        return mapper;
    }
}

