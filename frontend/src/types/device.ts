export const FileTypes = {
    EXCEL: "excel",
    CSV: "csv",
} as const;

export type FileType = (typeof FileTypes)[keyof typeof FileTypes];

export const DeviceTypes = {
    TEMPERATURE: "Temperature",
    HUMIDITY: "Humidity",
    SMOKE: "Smoke",
    MOTION: "Motion",
    INFRARED: "Infrared",
    PRESSURE: "Pressure",
} as const;

export type DeviceType = (typeof DeviceTypes)[keyof typeof DeviceTypes];

export type Device = {
    _id: string;
    name: string;
    deviceID: string;
    deviceType: DeviceType; 
    fileType: FileType;
    createdAt: Date;
};
