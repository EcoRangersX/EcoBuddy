import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { LocationIcon } from './icons/HomeIcons';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

interface EnableCurrentLocationProps {
  setLocation: (location: Location.LocationObject) => void;
  setLocationErrorMsg: (locationError: string) => void;
}

const EnableCurrentLocation = ({
  setLocation,
  setLocationErrorMsg,
}: EnableCurrentLocationProps) => {
  const requestLocationPermissions = () => {
    if (Platform.OS === 'android' && !Device.isDevice) {
      setLocationErrorMsg(
        'Oops, this will not work on an Android Emulator. Try it on your device!',
      );
      return;
    }

    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== Location.PermissionStatus.GRANTED) {
          setLocationErrorMsg('Permission to access location was denied');
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        if (error instanceof Error) {
          setLocationErrorMsg(error.message);
        } else {
          setLocationErrorMsg('An unexpected error occurred');
        }
      }
    })();
  }

  return (
    <View className="bg-white p-5 rounded-lg shadow-md shadow-black">
      <TouchableOpacity onPress={requestLocationPermissions} className='flex flex-row items-center space-x-4'>
        <LocationIcon size={30} />
        <Text className="text-base">Enable Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnableCurrentLocation;
