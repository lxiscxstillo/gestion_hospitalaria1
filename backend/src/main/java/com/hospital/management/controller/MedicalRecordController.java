package com.hospital.management.controller;

import com.hospital.management.facade.PatientManagementFacade;
import com.hospital.management.model.MedicalRecord;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/records")
@CrossOrigin
public class MedicalRecordController {
    private final PatientManagementFacade facade;
    public MedicalRecordController(PatientManagementFacade facade) { this.facade = facade; }

    public static record CreateRecordRequest(String patientId, String vitalSigns, String diagnosis, String treatments) {}

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public MedicalRecord create(@RequestBody CreateRecordRequest req) {
        return facade.createRecord(req.patientId(), req.vitalSigns(), req.diagnosis(), req.treatments());
    }

    @GetMapping(value = "/{patientId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<MedicalRecord> listByPatient(@PathVariable String patientId) {
        return facade.listRecords(patientId);
    }
}

