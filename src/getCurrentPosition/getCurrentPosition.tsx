import Geolocation, {GeolocationError, GeolocationOptions, GeolocationResponse} from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'whenInUse',
    locationProvider: 'auto',
});

const getCurrentPosition = (success: (response: GeolocationResponse) => void, error: (error: GeolocationError) => void, config: GeolocationOptions) => {
    Geolocation.getCurrentPosition(success, error, config);
};

export default getCurrentPosition;
