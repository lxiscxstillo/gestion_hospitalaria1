package com.hospital.management.model;

import java.time.Instant;

public abstract class Patient {
    private String id;
    private String name;
    private PatientType type;
    private Instant createdAt = Instant.now();

    protected Patient() {}

    protected Patient(String id, String name, PatientType type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public PatientType getType() { return type; }
    public void setType(PatientType type) { this.type = type; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}

