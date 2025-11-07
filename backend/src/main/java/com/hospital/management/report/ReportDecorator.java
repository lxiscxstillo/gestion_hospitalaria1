package com.hospital.management.report;

// Pattern: Decorator to add layers to reports
public abstract class ReportDecorator implements Report {
    protected final Report inner;
    protected ReportDecorator(Report inner) { this.inner = inner; }
}

