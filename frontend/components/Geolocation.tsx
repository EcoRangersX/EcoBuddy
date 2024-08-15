import { useState, useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

export default function GetGeolocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        if (Platform.OS === 'android' && !Device.isDevice) {
          setErrorMsg(
            'Oops, this will not work on an Android Emulator. Try it on your device!',
          );
          return;
        }

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== Location.PermissionStatus.GRANTED) {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMsg(error.message);
        } else {
          setErrorMsg('An unexpected error occurred');
        }
      }
    })();
  }, []);

  return (
    <View className="">
      {errorMsg ? (
        <Text>Error during fetching the Location: {errorMsg}</Text>
      ) : location ? (
        <View>
          <Text>Latitude: {location?.coords.latitude}</Text>
          <Text>Longitude: {location?.coords.longitude}</Text>
        </View>
      ): (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
