package com.hospital.management.controller;

import com.hospital.management.facade.PatientManagementFacade;
import com.hospital.management.repository.MedicalRecordRepository;
import com.hospital.management.repository.PatientRepository;
import com.hospital.management.repository.TemplateRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApiConfig {
    @Bean public PatientRepository patientRepository() { return new PatientRepository(); }
    @Bean public MedicalRecordRepository medicalRecordRepository() { return new MedicalRecordRepository(); }
    @Bean public TemplateRepository templateRepository() { return new TemplateRepository(); }
    @Bean public PatientManagementFacade patientManagementFacade(PatientRepository pr, MedicalRecordRepository mr, TemplateRepository tr) {
        return new PatientManagementFacade(pr, mr, tr);
    }
}

