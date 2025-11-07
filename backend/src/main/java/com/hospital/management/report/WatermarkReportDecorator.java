package com.hospital.management.report;

public class WatermarkReportDecorator extends ReportDecorator {
    public WatermarkReportDecorator(Report inner) { super(inner); }
    @Override
    public String generate() {
        return inner.generate() + "\n[Marca de agua: HOSPITAL]";
    }
}

