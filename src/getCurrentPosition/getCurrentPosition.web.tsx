type getCurrentPositionOptions = {
    maximumAge: number;
    timeout: number;
    enableHighAccuracy: boolean;
};

export const getCurrentPosition = (success: (pos: GeolocationPosition) => void, error: (err: GeolocationPositionError) => void, options: getCurrentPositionOptions) => {
    if (!('geolocation' in navigator)) {
        console.error('Geolocation is not supported by this browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
};
