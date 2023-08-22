type GetCurrentPositionOptions = {
    maximumAge: number;
    timeout: number;
    enableHighAccuracy: boolean;
};

const getCurrentPosition = (success: (response: GeolocationPosition) => void, error: (error: GeolocationPositionError) => void, options: GetCurrentPositionOptions) => {
    if (!('geolocation' in navigator)) {
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
};

export default getCurrentPosition;
