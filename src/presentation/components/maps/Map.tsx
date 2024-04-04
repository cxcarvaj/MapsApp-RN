import React from 'react';
import {Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Location} from '../../../infrastructure/interfaces/location';
import {FAB} from '../ui/FAB';

interface Props {
  showsUserLocation?: boolean;
  initialLocation: Location;
}

export const Map = ({showsUserLocation = true, initialLocation}: Props) => {
  return (
    <>
      <MapView
        showsUserLocation={showsUserLocation}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined} // remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="My Marker"
          description="Some description"
        /> */}
      </MapView>

      <FAB
        iconName="compass-outline"
        onPress={() => console.log('Hello')}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
    </>
  );
};
