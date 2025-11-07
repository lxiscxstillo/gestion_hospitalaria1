package com.hospital.management.bridge;

import com.hospital.management.model.Patient;

import java.util.List;
import java.util.stream.Collectors;

// Pattern: Bridge abstraction producing lightweight view models from a data source
public class PatientViewBridge {
    private final PatientDataSource dataSource;
    public PatientViewBridge(PatientDataSource dataSource) { this.dataSource = dataSource; }

    public List<PatientView> listPatientViews() {
        return dataSource.getAllPatients().stream()
                .map(p -> new PatientView(p.getId(), p.getName(), p.getType().name()))
                .collect(Collectors.toList());
    }

    public record PatientView(String id, String name, String type) {}
}

