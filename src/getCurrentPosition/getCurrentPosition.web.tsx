type GetCurrentPositionOptions = {
    maximumAge: number;
    timeout: number;
    enableHighAccuracy: boolean;
};

const getCurrentPosition = (success: (pos: GeolocationPosition) => void, error: (err: GeolocationPositionError) => void, options: GetCurrentPositionOptions) => {
    if (!('geolocation' in navigator)) {
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
};

export default getCurrentPosition;
