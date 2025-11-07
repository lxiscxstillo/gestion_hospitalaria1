package com.hospital.management.bridge;

import com.hospital.management.model.Patient;
import com.hospital.management.repository.PatientRepository;

import java.util.List;

public class InMemoryPatientDataSource implements PatientDataSource {
    private final PatientRepository repository;
    public InMemoryPatientDataSource(PatientRepository repository) {
        this.repository = repository;
    }
    @Override
    public List<Patient> getAllPatients() {
        return repository.findAll();
    }
}

