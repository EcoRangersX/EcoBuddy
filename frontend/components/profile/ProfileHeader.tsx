import { View, Text, Image } from 'react-native';

interface ProfileHeaderProps {
  username: string;
  fullName: string
  email: string;
  profile_image_url: string;
}

const ProfileHeader = ({
  username,
  fullName,
  email,
  profile_image_url,
}: ProfileHeaderProps) => {
  return (
    <View className="flex bg-white py-3 flex-row rounded-lg border-2 justify-around border-[#4ac965] shadow-md shadow-black">
      <Image
        source={{ uri: profile_image_url }}
        className="rounded-md w-20 h-20"
      />
      <View className="flex">
        <Text>
          <Text className="font-bold">Username: </Text>
          {username}
        </Text>
        <Text>
          <Text className="font-bold">Full Name: </Text>
          {fullName}
        </Text>
        <Text>
          <Text className="font-bold">Email: </Text>
          {email}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
