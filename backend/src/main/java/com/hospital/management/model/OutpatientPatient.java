package com.hospital.management.model;

public class OutpatientPatient extends Patient {
    public OutpatientPatient(String id, String name) {
        super(id, name, PatientType.OUTPATIENT);
    }
}

