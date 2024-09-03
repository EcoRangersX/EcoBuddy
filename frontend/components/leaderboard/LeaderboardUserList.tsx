import { View } from 'react-native';
import LeaderboardUserItem from './LeaderboardUserItem';
import { LeaderboardUserItemProps } from '@/types/quizzes';

interface LeaderboardUserListProps {
  users: LeaderboardUserItemProps[];
}

/**
 * Renders a list of users for the leaderboard.
 *
 * @component
 * @param {Object[]} users - An array of user objects.
 * @param {number} users[].user_id - The ID of the user.
 * @param {string} users[].username - The username of the user.
 * @param {string} users[].profile_image_url - The URL of the user's profile image.
 * @param {number} users[].score - The score of the user.
 * @returns {JSX.Element} The rendered leaderboard user list.
 */
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
