import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/styles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Enable Ubication</Text>

      <Pressable
        style={globalStyles.btnPrimary}
        onPress={requestLocationPermission}>
        <Text style={{color: 'white'}}>Enable Location</Text>
      </Pressable>

      <Text>Actual State: {locationStatus}</Text>
    </View>
  );
};
