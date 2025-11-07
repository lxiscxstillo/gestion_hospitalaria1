package com.hospital.management.service;

import com.hospital.management.factory.PatientFactory;
import com.hospital.management.model.Patient;
import com.hospital.management.model.PatientType;
import com.hospital.management.repository.PatientRepository;

import java.util.List;
import java.util.Optional;

public class PatientService {
    private final PatientRepository repository;
    public PatientService(PatientRepository repository) { this.repository = repository; }

    public Patient create(PatientType type, String name) {
        Patient patient = PatientFactory.createPatient(type, name);
        return repository.save(patient);
    }
    public List<Patient> list() { return repository.findAll(); }
    public Optional<Patient> get(String id) { return repository.findById(id); }
}

