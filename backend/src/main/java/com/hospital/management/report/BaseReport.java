package com.hospital.management.report;

public class BaseReport implements Report {
    private final String body;
    public BaseReport(String body) { this.body = body; }
    @Override
    public String generate() { return body; }
}

