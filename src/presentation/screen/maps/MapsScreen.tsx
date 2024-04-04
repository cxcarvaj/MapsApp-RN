import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Map} from '../../components/maps/Map';
import {useLocationStore} from '../../store/location/useLocationStore';
import {LoadingScreen} from '..';

export const MapsScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
    return () => {};
  }, [getLocation, lastKnownLocation]);

  if (!lastKnownLocation) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      {<Map initialLocation={lastKnownLocation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});
