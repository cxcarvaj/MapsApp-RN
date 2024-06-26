import React, {PropsWithChildren, useEffect} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppState} from 'react-native';

import {usePermissionStore} from '../store/permissions/usePermissionStore';
import {RootStackParams} from '../navigation/StackNavigator';

export const PermissionsChecked = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    if (locationStatus === 'granted') {
      navigation.reset({
        index: 0,
        routes: [{name: 'MapsScreen'}],
      });
    } else if (locationStatus !== 'undetermined') {
      navigation.reset({
        index: 0,
        routes: [{name: 'PermissionsScreen'}],
      });
    }
  }, [locationStatus, navigation]);

  useEffect(() => {
    checkLocationPermission();
  }, [checkLocationPermission]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [checkLocationPermission]);

  return <>{children}</>;
};
