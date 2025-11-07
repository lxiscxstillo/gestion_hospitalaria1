package com.hospital.management.controller;

import com.hospital.management.config.HospitalConfig;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/config")
@CrossOrigin
public class ConfigController {
    private final HospitalConfig config = HospitalConfig.getInstance();

    @GetMapping
    public Map<String, String> getAll() { return config.getAll(); }

    public static record ConfigEntry(String key, String value) {}

    @PostMapping
    public Map<String, String> set(@RequestBody ConfigEntry entry) {
        config.set(entry.key(), entry.value());
        return config.getAll();
    }
}

