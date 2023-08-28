import {GetCurrentPosition} from './getCurrentPosition.types';

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
        setTimeout(() => abortController.abort(), options.timeout);
        requestConfig.signal = abortController.signal;
    }

    const tempAPIToken = ''; // we get this token from our backend

    fetch(`${BASE_URL}?key=${tempAPIToken}`, requestConfig)
        .then((response) => response.json())
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
        .catch(error);
};

export default getCurrentPosition;
