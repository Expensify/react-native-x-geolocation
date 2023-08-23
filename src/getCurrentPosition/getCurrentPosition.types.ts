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
    code: number;
    message: string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}) => void;

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

export type GetCurrentPosition = (
    success: GeolocationSuccessCallback, 
    error: GeolocationErrorCallback, 
    options: GeolocationOptions
) => void;
