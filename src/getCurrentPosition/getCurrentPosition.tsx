import Geolocation, { GeolocationOptions } from '@react-native-community/geolocation';
import {getCurrentPositionProps} from './getCurrentPositionTypes';

Geolocation.setRNConfiguration({
      skipPermissionRequests: false,
      authorizationLevel: 'whenInUse',
      locationProvider: 'auto',
});

export const getCurrentPosition = (success, error, config: GeolocationOptions)  => {
    Geolocation.getCurrentPosition(success, error, config);
};