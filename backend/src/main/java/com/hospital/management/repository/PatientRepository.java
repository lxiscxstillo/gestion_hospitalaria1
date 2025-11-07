package com.hospital.management.repository;

import com.hospital.management.model.Patient;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class PatientRepository {
    private final Map<String, Patient> store = new ConcurrentHashMap<>();

    public Patient save(Patient patient) {
        store.put(patient.getId(), patient);
        return patient;
    }

    public Optional<Patient> findById(String id) { return Optional.ofNullable(store.get(id)); }
    public List<Patient> findAll() { return new ArrayList<>(store.values()); }
    public void delete(String id) { store.remove(id); }
}

