package com.oneuse.services.moneytransferlogger.config.properties;

import com.google.common.collect.ImmutableSet;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

import java.util.Set;

@PropertySource("classpath:application.properties")
@ConfigurationProperties(prefix = "frontend")
public class FrontendProperties {

    private Set<String> urls;

    public Set<String> getUrls() {
        return ImmutableSet.copyOf(urls);
    }

    public void setUrls(Set<String> urls) {
        this.urls = ImmutableSet.copyOf(urls);
    }
}

