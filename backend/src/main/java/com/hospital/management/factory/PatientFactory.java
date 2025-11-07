package com.hospital.management.factory;

import com.hospital.management.model.*;

import java.util.UUID;

// Pattern: Factory Method to create patients by type
public class PatientFactory {
    public static Patient createPatient(PatientType type, String name) {
        String id = UUID.randomUUID().toString();
        return switch (type) {
            case EMERGENCY -> new EmergencyPatient(id, name);
            case HOSPITALIZATION -> new HospitalizationPatient(id, name);
            case OUTPATIENT -> new OutpatientPatient(id, name);
        };
    }
}

