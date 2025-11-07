package com.hospital.management.model;

public class HospitalizationPatient extends Patient {
    public HospitalizationPatient(String id, String name) {
        super(id, name, PatientType.HOSPITALIZATION);
    }
}

