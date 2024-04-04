import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {PermissionsChecked} from './presentation/providers/PermissionsChecked';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecked>
        <StackNavigator />
      </PermissionsChecked>
    </NavigationContainer>
  );
};
