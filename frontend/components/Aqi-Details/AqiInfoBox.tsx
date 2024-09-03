import { View, Text } from 'react-native';
import { styles } from '@/constants/GlobalStyles';

interface AqiInfoBoxProps {
  info: string;
}

/**
 * Renders an information box for displaying AQI (Air Quality Index) details.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.info - The information to be displayed in the box.
 * @returns {JSX.Element} The rendered component.
 */
const AqiInfoBox = ({ info }: AqiInfoBoxProps) => {
  return (
    <View
      style={styles.boxStyles}
      className="flex p-3">
      <Text className="text-lg text-black">{info}</Text>
    </View>
  );
};

export default AqiInfoBox;
