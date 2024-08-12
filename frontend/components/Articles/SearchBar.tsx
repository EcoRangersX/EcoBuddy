import { View, TextInput } from 'react-native';
import { SearchIcon } from '../Icons/Articles';

const SearchBar = () => {

  return (
    <View className="bg-white border-2 border-[#4ac965] shadow-md shadow-black rounded-full flex-row items-center justify-between px-4 py-2">
      <TextInput placeholder="Search articles" />
      <SearchIcon size={36} />
    </View>
  );
};

export default SearchBar;
