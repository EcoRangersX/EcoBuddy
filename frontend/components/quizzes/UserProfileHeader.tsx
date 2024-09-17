import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StarIcon } from '../icons/LeaderboardIcons';
import capitalizeWord from '@/utils/capitalizeWord';
import { useRouter } from 'expo-router';

interface UserProfileHeaderProps {
  profile_image_url: string;
  level: string;
  username: string;
  stars: number;
  id: number;
}

const UserProfileHeader = ({
  profile_image_url,
  level,
  username,
  stars,
  id,
}: UserProfileHeaderProps) => {
  const router = useRouter();

  const handleImagePress = () => {
    router.push(`/profile/${id}`);
  };

  return (
    <View className="flex flex-row p-3 items-center justify-between">
      <View className="flex-row space-x-5">
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            className="w-20 h-20 rounded-full"
            source={{ uri: profile_image_url }}
          />
        </TouchableOpacity>
        <View className="items-start space-y-1">
          <Text
            className="text-base"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ maxWidth: 130, overflow: 'hidden' }}>
            {username}
          </Text>
          <Text className="bg-white rounded-[30px] p-2 shadow-sm shadow-black">
            {capitalizeWord(level)}
          </Text>
        </View>
      </View>
      {/*
      TODO: Not sure how to place the number of stars element horizontally 
      since username might be long and it will cause UI issues 
      */}
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
