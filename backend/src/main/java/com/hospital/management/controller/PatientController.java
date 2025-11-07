package com.hospital.management.controller;

import com.hospital.management.facade.PatientManagementFacade;
import com.hospital.management.model.Patient;
import com.hospital.management.model.PatientType;
import com.hospital.management.bridge.PatientViewBridge;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin
public class PatientController {
    private final PatientManagementFacade facade;
    public PatientController(PatientManagementFacade facade) { this.facade = facade; }

    public static record CreatePatientRequest(String name, PatientType type) {}

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Patient create(@RequestBody CreatePatientRequest req) {
        return facade.createPatient(req.type(), req.name());
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Patient> list() { return facade.listPatients(); }

    @GetMapping(value = "/views", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PatientViewBridge.PatientView> listViews() { return facade.listPatientViews(); }
}

