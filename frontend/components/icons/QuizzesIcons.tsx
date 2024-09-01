import { TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { BasicIconProps } from './HomeIcons';
import { Link } from 'expo-router';

interface StartQuizIconProps extends BasicIconProps {
  id: number;
}

const StartQuizIcon = ({
  size = 24,
  color = 'white',
  id,
}: StartQuizIconProps) => {
  return (
    <TouchableOpacity
      className="bg-[#9ad5e0] w-10 h-10 rounded-full justify-center items-center">
      <Link href={{ pathname: '/quizzes/[id]', params: { "id": id } }}>
        <FontAwesome6 name="play" size={size} color={color} />
      </Link>
    </TouchableOpacity>
  );
};

const StreakIcon = ({ size = 24 }: BasicIconProps) => {
  return (
    <TouchableOpacity>
      <Svg
        width={size}
        height={size}
        viewBox="-33 0 255 255"
        preserveAspectRatio="xMidYMid">
        <Defs>
          <LinearGradient
            id="linear-gradient-1"
            gradientUnits="userSpaceOnUse"
            x1="94.141"
            y1="255"
            x2="94.141"
            y2="0.188">
            <Stop offset="0" stopColor="#ff4c0d" />
            <Stop offset="1" stopColor="#fc9502" />
          </LinearGradient>
        </Defs>
        <Path
          d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z"
          fill="url(#linear-gradient-1)"
          fillRule="evenodd"
        />
        <Path
          d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z"
          fill="#fc9502"
          fillRule="evenodd"
        />
        <Path
          d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z"
          fill="#fce202"
          fillRule="evenodd"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export { StartQuizIcon, StreakIcon };
