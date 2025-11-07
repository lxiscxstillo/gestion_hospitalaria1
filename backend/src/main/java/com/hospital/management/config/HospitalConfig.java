package com.hospital.management.config;

import java.util.HashMap;
import java.util.Map;

// Pattern: Singleton used here to centralize hospital configuration.
public class HospitalConfig {
    private static volatile HospitalConfig instance;
    private final Map<String, String> settings = new HashMap<>();

    private HospitalConfig() {}

    public static HospitalConfig getInstance() {
        if (instance == null) {
            synchronized (HospitalConfig.class) {
                if (instance == null) instance = new HospitalConfig();
            }
        }
        return instance;
    }

    public void set(String key, String value) { settings.put(key, value); }
    public String get(String key) { return settings.get(key); }
    public Map<String, String> getAll() { return settings; }
}

