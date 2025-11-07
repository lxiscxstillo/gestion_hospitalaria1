package com.hospital.management.controller;

import com.hospital.management.facade.PatientManagementFacade;
import com.hospital.management.model.template.DiagnosisTemplate;
import com.hospital.management.model.template.ExamTemplate;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin
public class TemplateController {
    private final PatientManagementFacade facade;
    public TemplateController(PatientManagementFacade facade) { this.facade = facade; }

    @GetMapping(value = "/exams", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ExamTemplate> listExams() { return facade.templates().listExams(); }

    @GetMapping(value = "/diagnoses", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<DiagnosisTemplate> listDiagnoses() { return facade.templates().listDiagnoses(); }

    @PostMapping(value = "/exams/{id}/duplicate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ExamTemplate duplicateExam(@PathVariable String id) { return facade.templates().duplicateExam(id); }

    @PostMapping(value = "/diagnoses/{id}/duplicate", produces = MediaType.APPLICATION_JSON_VALUE)
    public DiagnosisTemplate duplicateDiagnosis(@PathVariable String id) { return facade.templates().duplicateDiagnosis(id); }
}

