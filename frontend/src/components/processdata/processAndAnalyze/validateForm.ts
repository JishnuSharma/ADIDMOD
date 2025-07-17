interface FormDataInput {
    deviceFile: File | null;
    minimumValue: number | string;
    maximumValue: number | string;
    acceptablePercentage: number | string;
    dataType: string;
    deviceId: string;
}

interface ValidatedFormData {
    deviceFile: File;
    min: number;
    max: number;
    accept: number;
    dataType: string;
    deviceId: string;
}

export const validateFormData = (formData: FormDataInput): ValidatedFormData => {
    const {
        deviceFile,
        minimumValue,
        maximumValue,
        acceptablePercentage,
        dataType,
        deviceId,
    } = formData;

    if (
        !deviceFile ||
        !acceptablePercentage ||
        !dataType ||
        !deviceId ||
        !minimumValue ||
        !maximumValue
    ) {
        throw new Error("All fields are required.");
    }

    const min = Number(minimumValue);
    const max = Number(maximumValue);
    const accept = Number(acceptablePercentage);

    if (isNaN(min) || isNaN(max) || isNaN(accept)) {
        throw new Error("Numeric values are invalid.");
    }

    return { deviceFile, min, max, accept, dataType, deviceId };
};
