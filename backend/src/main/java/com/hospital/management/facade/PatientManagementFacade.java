package com.hospital.management.facade;

import com.hospital.management.bridge.InMemoryPatientDataSource;
import com.hospital.management.bridge.PatientViewBridge;
import com.hospital.management.model.MedicalRecord;
import com.hospital.management.model.Patient;
import com.hospital.management.model.PatientType;
import com.hospital.management.repository.MedicalRecordRepository;
import com.hospital.management.repository.PatientRepository;
import com.hospital.management.repository.TemplateRepository;
import com.hospital.management.service.MedicalRecordService;
import com.hospital.management.service.PatientService;
import com.hospital.management.service.ReportService;
import com.hospital.management.service.TemplateService;

import java.util.List;

// Pattern: Facade for patient management to unify subsystems
public class PatientManagementFacade {
    private final PatientService patientService;
    private final MedicalRecordService medicalRecordService;
    private final TemplateService templateService;
    private final ReportService reportService;
    private final PatientViewBridge patientViewBridge;

    public PatientManagementFacade(PatientRepository patientRepository,
                                   MedicalRecordRepository medicalRecordRepository,
                                   TemplateRepository templateRepository) {
        this.patientService = new PatientService(patientRepository);
        this.medicalRecordService = new MedicalRecordService(medicalRecordRepository);
        this.templateService = new TemplateService(templateRepository);
        this.reportService = new ReportService();
        this.patientViewBridge = new PatientViewBridge(new InMemoryPatientDataSource(patientRepository));
        // seed templates
        this.templateService.seedDefaults();
    }

    public Patient createPatient(PatientType type, String name) { return patientService.create(type, name); }
    public List<Patient> listPatients() { return patientService.list(); }
    public List<PatientViewBridge.PatientView> listPatientViews() { return patientViewBridge.listPatientViews(); }
    public MedicalRecord createRecord(String patientId, String vital, String diag, String treat) { return medicalRecordService.create(patientId, vital, diag, treat); }
    public List<MedicalRecord> listRecords(String patientId) { return medicalRecordService.listByPatient(patientId); }
    public String generateReport(String body, boolean sign, boolean encrypt, boolean watermark) { return reportService.generate(body, sign, encrypt, watermark); }
    public TemplateService templates() { return templateService; }
}

