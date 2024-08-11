import { View } from 'react-native';
import LeaderboardUserItem from './LeaderboardUserItem';
import { LeaderboardUserItemProps } from '@/types/quizzes';

interface LeaderboardUserListProps {
  users: LeaderboardUserItemProps[];
}

const LeaderboardUserList = ({ users }: LeaderboardUserListProps) => {
  return (<View className="bg-white rounded-[30px] p-2">
    {users.map((user, index) => (
      <LeaderboardUserItem
        key={index}
        username={user.username}
        username_profile_url={user.username_profile_url}
        score={user.score}
      />
    ))}
  </View>);
};

export default LeaderboardUserList;
