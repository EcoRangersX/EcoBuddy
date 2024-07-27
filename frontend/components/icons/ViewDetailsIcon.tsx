import Svg, { Path } from 'react-native-svg';

interface ViewDetailsIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const ViewDetailsIcon = ({
  color = '#3ac5c9',
  width = 24,
  height = 24,
}: ViewDetailsIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path d="M..." fill={color} />
  </Svg>
);

export default ViewDetailsIcon;
