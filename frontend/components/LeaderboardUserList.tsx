import { View } from 'react-native';
import LeaderboardUserItem from './LeaderboardUserItem';
import { LeaderboardUserItemProps } from '@/types/quizzes';

interface LeaderboardUserListProps {
  users: LeaderboardUserItemProps[];
}

const LeaderboardUserList = ({ users }: LeaderboardUserListProps) => {
  return (<View className="bg-white rounded-xl p-2">
    {users.map((user, index) => (
      <LeaderboardUserItem
        key={index}
        user_id={user.user_id}
        username={user.username}
        profile_image_url={user.profile_image_url}
        score={user.score}
      />
    ))}
  </View>);
};

export default LeaderboardUserList;
