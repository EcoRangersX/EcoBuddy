import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

function First() {
  return (
    <View>
      <Text>First Screen</Text>
    </View>
  );
}

function Second() {
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
}

export default function TopTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="First" component={<First />} />
      <TopTab.Screen name="Second" component={<Second />} />
    </TopTab.Navigator>
  );
}
