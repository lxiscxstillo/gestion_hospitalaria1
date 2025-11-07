package com.hospital.management.report;

public class SignatureReportDecorator extends ReportDecorator {
    public SignatureReportDecorator(Report inner) { super(inner); }
    @Override
    public String generate() {
        return inner.generate() + "\n-- Firmado digitalmente --"; // UI note in Spanish is acceptable in content
    }
}

