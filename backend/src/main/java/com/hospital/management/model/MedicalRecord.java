package com.hospital.management.model;

import java.util.ArrayList;
import java.util.List;

public class MedicalRecord {
    private String id;
    private String patientId;
    private String vitalSigns;
    private String diagnosis;
    private String treatments;
    private List<String> evolutionNotes = new ArrayList<>();
    private List<String> attachments = new ArrayList<>();

    public MedicalRecord() {}

    public MedicalRecord(String id, String patientId) {
        this.id = id;
        this.patientId = patientId;
    }

    // Pattern: Builder used to build complex MedicalRecord objects.
    public static class Builder {
        private final MedicalRecord record;
        public Builder(String id, String patientId) { this.record = new MedicalRecord(id, patientId); }
        public Builder vitalSigns(String vitalSigns) { this.record.vitalSigns = vitalSigns; return this; }
        public Builder diagnosis(String diagnosis) { this.record.diagnosis = diagnosis; return this; }
        public Builder treatments(String treatments) { this.record.treatments = treatments; return this; }
        public Builder addEvolutionNote(String note) { this.record.evolutionNotes.add(note); return this; }
        public Builder addAttachment(String attachment) { this.record.attachments.add(attachment); return this; }
        public MedicalRecord build() { return this.record; }
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getPatientId() { return patientId; }
    public void setPatientId(String patientId) { this.patientId = patientId; }
    public String getVitalSigns() { return vitalSigns; }
    public void setVitalSigns(String vitalSigns) { this.vitalSigns = vitalSigns; }
    public String getDiagnosis() { return diagnosis; }
    public void setDiagnosis(String diagnosis) { this.diagnosis = diagnosis; }
    public String getTreatments() { return treatments; }
    public void setTreatments(String treatments) { this.treatments = treatments; }
    public List<String> getEvolutionNotes() { return evolutionNotes; }
    public void setEvolutionNotes(List<String> evolutionNotes) { this.evolutionNotes = evolutionNotes; }
    public List<String> getAttachments() { return attachments; }
    public void setAttachments(List<String> attachments) { this.attachments = attachments; }
}

