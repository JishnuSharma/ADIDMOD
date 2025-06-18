import { DeviceTypes, FileTypes } from "../../types/enums";

export type AddDeviceProps = {
    name: string;
    deviceType: DeviceTypes;
    fileType: FileTypes;
};

export type AddDeviceModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedDevice: AddDeviceProps) => void;
};

export type DeviceCardProps = {
    name: string;
    deviceId: string;
    fileType: FileTypes;
    deviceType: DeviceTypes;
    date: Date;
    time: Date;
    imageUrl?: string;
    onClick?: () => void;
};

export type EditDeviceModalProps = {
    device: DeviceCardProps | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedDevice: DeviceCardProps) => void;
};
