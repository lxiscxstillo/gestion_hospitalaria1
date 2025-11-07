package com.hospital.management.controller;

import com.hospital.management.service.DeviceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/devices")
@CrossOrigin
public class DeviceController {
    private final DeviceService deviceService = new DeviceService();

    @GetMapping("/read")
    public String read(@RequestParam String deviceId) {
        return deviceService.read(deviceId);
    }
}

