package com.hospital.management.service;

import com.hospital.management.report.*;

public class ReportService {
    public String generate(String body, boolean sign, boolean encrypt, boolean watermark) {
        Report report = new BaseReport(body);
        if (sign) report = new SignatureReportDecorator(report);
        if (encrypt) report = new EncryptionReportDecorator(report);
        if (watermark) report = new WatermarkReportDecorator(report);
        return report.generate();
    }
}

