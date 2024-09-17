import { View, Text, Image } from 'react-native';
import { StarIcon } from '../icons/Leaderboard';

interface UserProfileHeaderProps {
  profile_image_url: string;
  level: string;
  username: string;
  stars: number;
}

const UserProfileHeader = ({
  profile_image_url,
  level,
  username,
  stars,
}: UserProfileHeaderProps) => {
  return (
    <View className="flex flex-row px-5 mt-5 items-center justify-between">
      <View className="flex-row space-x-5">
        <Image
          className="w-20 h-20 rounded-full"
          source={{ uri: profile_image_url }}
        />
        <View className="items-center space-y-1">
          <View className='w-max-[50px] whitespace-normal'>
            <Text className="text-base">{username}</Text>
          </View>
          <Text className="bg-white rounded-[30px] p-2 shadow-sm shadow-black">
            {level}
          </Text>
        </View>
      </View>
      <View className="bg-white rounded-[30px] flex-row p-2 space-x-4 items-center shadow-md shadow-black">
        <View className="w-12 h-12 rounded-full justify-center items-center bg-green-500">
          <StarIcon color="yellow" size={36} />
        </View>
        <Text className="text-base">{stars}</Text>
      </View>
    </View>
  );
};

export default UserProfileHeader;
