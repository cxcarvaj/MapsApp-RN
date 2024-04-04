import React from 'react';
import {Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export const Map = () => {
  return (
    <>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined} // remove if not using Google Maps
        style={{flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
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
    </>
  );
};
