package com.hospital.management.device;

// Pattern: Adapter to connect old medical devices through a modern interface
public class LegacyDeviceAdapter implements DeviceConnection {
    private final LegacyDevice legacyDevice = new LegacyDevice();

    @Override
    public String readData(String deviceId) {
        return legacyDevice.legacyRead(deviceId);
    }
}

