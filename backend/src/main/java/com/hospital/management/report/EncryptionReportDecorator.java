package com.hospital.management.report;

public class EncryptionReportDecorator extends ReportDecorator {
    public EncryptionReportDecorator(Report inner) { super(inner); }
    @Override
    public String generate() {
        String content = inner.generate();
        String encrypted = new StringBuilder(content).reverse().toString(); // fake encryption
        return encrypted + "\n[Encriptado]";
    }
}

