package com.hospital.management.repository;

import com.hospital.management.model.MedicalRecord;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class MedicalRecordRepository {
    private final Map<String, MedicalRecord> store = new ConcurrentHashMap<>();

    public MedicalRecord save(MedicalRecord record) {
        store.put(record.getId(), record);
        return record;
    }
    public Optional<MedicalRecord> findById(String id) { return Optional.ofNullable(store.get(id)); }
    public List<MedicalRecord> findByPatientId(String patientId) {
        return store.values().stream().filter(r -> Objects.equals(r.getPatientId(), patientId)).toList();
    }
}

