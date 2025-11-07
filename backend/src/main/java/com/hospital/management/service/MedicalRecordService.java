package com.hospital.management.service;

import com.hospital.management.model.MedicalRecord;
import com.hospital.management.repository.MedicalRecordRepository;

import java.util.List;
import java.util.UUID;

public class MedicalRecordService {
    private final MedicalRecordRepository repository;
    public MedicalRecordService(MedicalRecordRepository repository) { this.repository = repository; }

    public MedicalRecord create(String patientId, String vitalSigns, String diagnosis, String treatments) {
        String id = UUID.randomUUID().toString();
        MedicalRecord record = new MedicalRecord.Builder(id, patientId)
                .vitalSigns(vitalSigns)
                .diagnosis(diagnosis)
                .treatments(treatments)
                .build();
        return repository.save(record);
    }

    public List<MedicalRecord> listByPatient(String patientId) {
        return repository.findByPatientId(patientId);
    }
}

