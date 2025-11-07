package com.hospital.management.controller;

import com.hospital.management.facade.PatientManagementFacade;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin
public class ReportController {
    private final PatientManagementFacade facade;
    public ReportController(PatientManagementFacade facade) { this.facade = facade; }

    public static record GenerateReportRequest(String body, boolean sign, boolean encrypt, boolean watermark) {}

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    public String generate(@RequestBody GenerateReportRequest req) {
        return facade.generateReport(req.body(), req.sign(), req.encrypt(), req.watermark());
    }
}

