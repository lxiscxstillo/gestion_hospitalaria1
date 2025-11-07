package com.hospital.management.repository;

import com.hospital.management.model.template.DiagnosisTemplate;
import com.hospital.management.model.template.ExamTemplate;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class TemplateRepository {
    private final Map<String, ExamTemplate> examStore = new ConcurrentHashMap<>();
    private final Map<String, DiagnosisTemplate> diagnosisStore = new ConcurrentHashMap<>();

    public ExamTemplate saveExam(ExamTemplate t) { examStore.put(t.getId(), t); return t; }
    public DiagnosisTemplate saveDiagnosis(DiagnosisTemplate t) { diagnosisStore.put(t.getId(), t); return t; }

    public Optional<ExamTemplate> findExam(String id) { return Optional.ofNullable(examStore.get(id)); }
    public Optional<DiagnosisTemplate> findDiagnosis(String id) { return Optional.ofNullable(diagnosisStore.get(id)); }

    public List<ExamTemplate> listExams() { return new ArrayList<>(examStore.values()); }
    public List<DiagnosisTemplate> listDiagnoses() { return new ArrayList<>(diagnosisStore.values()); }
}

