export type GeolocationSuccessCallback = (position: {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
    timestamp: number;
}) => void;

export type GeolocationErrorCallback = (error: {
    code: GeolocationErrorCode;
    message: string;
    PERMISSION_DENIED: GeolocationErrorCode.PERMISSION_DENIED;
    POSITION_UNAVAILABLE: GeolocationErrorCode.POSITION_UNAVAILABLE;
    TIMEOUT: GeolocationErrorCode.TIMEOUT;

    /* Web only */
    NOT_SUPPORTED?: GeolocationErrorCode.NOT_SUPPORTED;
}) => void;

export enum GeolocationErrorCode {
    PERMISSION_DENIED = 1,
    POSITION_UNAVAILABLE = 2,
    TIMEOUT = 3,
    NOT_SUPPORTED = -1,
}

export type GeolocationOptions = {
    timeout?: number;
    maximumAge?: number;
    enableHighAccuracy?: boolean;

    /** Native only */
    distanceFilter?: number;

    /** Native only */
    useSignificantChanges?: boolean;

    /** Native only */
    interval?: number;

    /** Native only */
    fastestInterval?: number;
};

export type GetCurrentPosition = (success: GeolocationSuccessCallback, error: GeolocationErrorCallback, options?: GeolocationOptions) => void;
