import { GetCurrentPosition } from "./getCurrentPosition.types";

const getCurrentPosition: GetCurrentPosition = (success, error, options) => {
    if (typeof navigator === 'undefined' || !('geolocation' in navigator)) {
        error({
            code: -1,
            message: 'Geolocation is not supported by this environment.',
            PERMISSION_DENIED: -1,
            POSITION_UNAVAILABLE: -1,
            TIMEOUT: -1
        });
        return;
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
};

export default getCurrentPosition;
