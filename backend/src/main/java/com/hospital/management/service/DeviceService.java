package com.hospital.management.service;

import com.hospital.management.device.DeviceConnection;
import com.hospital.management.device.LegacyDeviceAdapter;

public class DeviceService {
    private final DeviceConnection connection = new LegacyDeviceAdapter();
    public String read(String deviceId) { return connection.readData(deviceId); }
}

