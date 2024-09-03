import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LeaderboardUserItemProps } from '@/types/quizzes';


/**
 * Renders a leaderboard user item.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.username - The username of the user.
 * @param {number} props.user_id - The ID of the user.
 * @param {string} props.profile_image_url - The URL of the user's profile image.
 * @param {number} props.score - The score of the user.
 * @returns {JSX.Element} The rendered leaderboard user item.
 */
const LeaderboardUserItem = ({
  username,
  user_id,
  profile_image_url,
  score,
}: LeaderboardUserItemProps) => {
  const handleProfileImagePress = (user_id: number) => {
    console.log(`Navigating to user profile with id: ${user_id}`);
  };

  return (
    <View className="flex-row bg-white shadow-sm items-center justify-between shadow-black rounded-full p-3 mb-4 border-2 border-[#4ac965]">
      <View>
        <Text className="text-base text-black">{username}</Text>
      </View>
      <View>
        <Text className="text-sm text-gray-500">{score}</Text>
      </View>
      <TouchableOpacity onPress={() => handleProfileImagePress(user_id)}>
        <Image
          source={{ uri: profile_image_url }}
          className="w-12 h-12 rounded-2xl"
        />
      </TouchableOpacity>
    </View>
  );
};

export default LeaderboardUserItem;
