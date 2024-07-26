import { useState, useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import useGeocode from '@/hooks/useGetAdress';

export default function GetGeolocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { address, error, getGeocode } = useGeocode();

  useEffect(() => {
    (async () => {
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

      if (currentLocation) {
        getGeocode({
          lat: currentLocation.coords.latitude,
          lng: currentLocation.coords.longitude,
        });
      }
    })();
  }, []);

  let locationInfo = 'Waiting..';
  if (errorMsg) {
    locationInfo = errorMsg;
  } else if (location) {
    if (address) {
      locationInfo = `\n Address: ${address}`;
    }
  } else if (error) {
    locationInfo = error;
  }

  return (
    <View className="">
      <Text className="text-lg text-center">{locationInfo}</Text>
    </View>
  );
}
