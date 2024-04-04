import Geolocation from '@react-native-community/geolocation';
import {Location} from '../../infrastructure/interfaces/location';

export const getCurrentLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        resolve({latitude, longitude});
      },
      error => {
        console.log('Error getting location', error);
        reject(error);
      },
      {
        enableHighAccuracy: true,
      },
    );
  });
};
