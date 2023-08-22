import { GeolocationOptions } from '@react-native-community/geolocation';
export interface Position {
    latitude: number;
    longitude: number;
}

export type getCurrentPositionProps = {
    success: (position: Position) => void;     
    
    error?: () => void;
    
    options?: GeolocationOptions
}