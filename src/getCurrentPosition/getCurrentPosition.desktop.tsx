import {GetCurrentPosition, GeolocationErrorCode} from './getCurrentPosition.types';

type GoogleAPIsGeoLocateResponse = {
    location: {
        lat: number;
        lng: number;
    };
    accuracy: number;
};

type FetchConfigWithOptions = {
    method: string;
    signal?: AbortSignal;
};

const BASE_URL = 'https://www.googleapis.com/geolocation/v1/geolocate';

// api request config
const requestConfig: FetchConfigWithOptions = {
    method: 'POST',
};

const getCurrentPosition: GetCurrentPosition = (
    success,
    error,
    options, // we will ignore options.maximumAge and options.enableHighAccuracy since cant pass it to geolocate api directly
) => {
    // emulate the timeout param with an abort signal
    if (options?.timeout) {
        const abortController = new AbortController();
        setTimeout(() => {
            abortController.abort();
        }, options.timeout);
        requestConfig.signal = abortController.signal;
    }

    const tempAPIToken = ''; // we get this token from our backend

    fetch(`${BASE_URL}?key=${tempAPIToken}`, requestConfig)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .then((response: GoogleAPIsGeoLocateResponse) => {
            // transform response to match with the window.navigator.geolocation.getCurrentPosition response
            const transformedResponse = {
                coords: {
                    latitude: response.location.lat,
                    longitude: response.location.lng,
                    accuracy: response.accuracy,
                    // return null for these keys as we don't get them in response when api is directly called
                    altitude: null,
                    altitudeAccuracy: null,
                    heading: null,
                    speed: null,
                },
                timestamp: Date.now(), // the api call doesn't return timestamp directly, so we emulate ourselves
            };

            success(transformedResponse);
        })
        .catch((apiError) => {
            // the base error object when api call fails
            const baseErrorObject = {
                // since we are making a direct api call, we won't get permission denied error code
                PERMISSION_DENIED: GeolocationErrorCode.PERMISSION_DENIED,
                POSITION_UNAVAILABLE: GeolocationErrorCode.POSITION_UNAVAILABLE,
                TIMEOUT: GeolocationErrorCode.TIMEOUT,
                NOT_SUPPORTED: GeolocationErrorCode.NOT_SUPPORTED,
            };

            // return timeout error on abort
            if (apiError instanceof Error && apiError.message === 'The user aborted a request.') {
                error({
                    ...baseErrorObject,
                    code: GeolocationErrorCode.TIMEOUT,
                    // adds a generic message for desktop, when timeout occurs
                    message: 'timeout',
                });
                return;
            }

            error({
                ...baseErrorObject,
                code: GeolocationErrorCode.POSITION_UNAVAILABLE,
                // adding a generic message for desktop, position unavailable can mean 'no internet'
                // or some other position related issues on api call failure (excluding timeout)
                message: 'position unavailable',
            });
        });
};

export default getCurrentPosition;
