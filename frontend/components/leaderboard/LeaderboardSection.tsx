import { View, Text } from 'react-native';
import LeaderboardUserList from './LeaderboardUserList';
import { LeaderboardUserItemProps } from '@/types/quizzes';

interface LeaderboardProps {
  users: LeaderboardUserItemProps[];
}

/**
 * Renders the leaderboard section component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.users - The array of users for the leaderboard.
 * @returns {JSX.Element} The rendered leaderboard section.
 */
const LeaderbordSection = ({ users }: LeaderboardProps) => {
  return (
    <View className="p-3">
      <Text className="text-xl">Leaderboard 🏆</Text>
      <View className='p-2'>
        <LeaderboardUserList users={users} />
      </View>
    </View>
  );
};

export default LeaderbordSection;
