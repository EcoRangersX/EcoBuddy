import { View, Text, TouchableOpacity, Image } from 'react-native';

interface LeaderboardUserItem {
  username: string;
  username_profile_url: string;
  score: number;
}

const LeaderboardUserItem = ({ username, username_profile_url, score }) => {
  const handleProfileImagePress = () => {
    console.log('Profile Image Pressed');
  };

  return (
    <View className="flex-row bg-white shadow-sm items-center  justify-between shadow-black rounded-full p-3 border-2 border-[#4ac965]">
      <View>
        <Text className="text-base text-black">{username}</Text>
      </View>
      <View>
        <Text className="text-sm text-gray-500">{score}</Text>
      </View>
      <TouchableOpacity onPress={handleProfileImagePress}>
        <Image
          source={{ uri: username_profile_url }}
          className="w-12 h-12 rounded-2xl"
        />
      </TouchableOpacity>
    </View>
  );
};

export default LeaderboardUserItem;
