package com.hospital.management.bridge;

import com.hospital.management.model.Patient;

import java.util.List;

// Pattern: Bridge implementor to separate visualization from data source
public interface PatientDataSource {
    List<Patient> getAllPatients();
}

