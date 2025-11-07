package com.hospital.management.service;

import com.hospital.management.model.template.DiagnosisTemplate;
import com.hospital.management.model.template.ExamTemplate;
import com.hospital.management.repository.TemplateRepository;

import java.util.List;
import java.util.UUID;

public class TemplateService {
    private final TemplateRepository repository;
    public TemplateService(TemplateRepository repository) { this.repository = repository; }

    public List<ExamTemplate> listExams() { return repository.listExams(); }
    public List<DiagnosisTemplate> listDiagnoses() { return repository.listDiagnoses(); }

    public ExamTemplate duplicateExam(String id) {
        ExamTemplate original = repository.findExam(id).orElseThrow();
        ExamTemplate copy = original.clone();
        copy.setId(UUID.randomUUID().toString());
        copy.setName(original.getName() + " (copia)");
        return repository.saveExam(copy);
    }

    public DiagnosisTemplate duplicateDiagnosis(String id) {
        DiagnosisTemplate original = repository.findDiagnosis(id).orElseThrow();
        DiagnosisTemplate copy = original.clone();
        copy.setId(UUID.randomUUID().toString());
        copy.setName(original.getName() + " (copia)");
        return repository.saveDiagnosis(copy);
    }

    public void seedDefaults() {
        repository.saveExam(new ExamTemplate(UUID.randomUUID().toString(), "Hemograma básico", "Campos: HB, HTO, PLT"));
        repository.saveExam(new ExamTemplate(UUID.randomUUID().toString(), "Química sanguínea", "Campos: GLU, UREA, CREA"));
        repository.saveDiagnosis(new DiagnosisTemplate(UUID.randomUUID().toString(), "Dolor torácico", "Regla de evaluación clínica"));
    }
}

