import {GetCurrentPosition} from './getCurrentPosition.types';

type GoogleAPIsGeoLocateResponse = {
    location: {
        lat: number;
        lng: number;
    };
    accuracy: number;
}

const BASE_URL = 'https://www.googleapis.com/geolocation/v1/geolocate';
const requestConfig = {
    method: 'POST',
};

const getCurrentPosition: GetCurrentPosition = (success, error) => {
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
                timestamp: Date.now(), // the api call doesn't return timestamp directly, so we return ourselves
            };

            success(transformedResponse);
        })
        .catch(error);
};

export default getCurrentPosition;
