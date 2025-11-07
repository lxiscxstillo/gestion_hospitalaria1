package com.hospital.management.model;

public class EmergencyPatient extends Patient {
    public EmergencyPatient(String id, String name) {
        super(id, name, PatientType.EMERGENCY);
    }
}

