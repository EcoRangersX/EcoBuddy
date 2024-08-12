import { View, TextInput } from 'react-native';
import { useState } from 'react';
import { SearchIcon, ClearQueryIcon } from '../Icons/Articles';
import { ArticleProps } from '@/types/articles';

interface SearchBarProps {
  filteredArticles: ArticleProps[];
}

const SearchBar = ({}: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const clearSearchQuery = () => {
    setSearchQuery('');
  };

  return (
    <View className="bg-white border-2 border-[#4ac965] shadow-md shadow-black rounded-full flex-row items-center justify-around px-4 py-2">
      <TextInput
        className="w-[85%] h-12"
        placeholder="Search articles"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {searchQuery?.length > 0 ? (
        <View className="flex-row items-center">
          <ClearQueryIcon size={36} onPress={() => clearSearchQuery()} />
          <SearchIcon size={36} />
        </View>
      ) : (
        <SearchIcon size={36} />
      )}
    </View>
  );
};

export default SearchBar;
