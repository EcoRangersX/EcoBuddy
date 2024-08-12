import { View, Text } from 'react-native';
import { useState } from 'react';
import SearchBar from './SearchBar';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSearch, setOpenSearch] = useState(false);

  const clearQuery = () => {
    setSearchQuery('');
  };

  const onSearchBarFocus = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <View className="">
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        clearQuery={clearQuery}
        onFocus={onSearchBarFocus}
      />
      {openSearch && (
        <View className="">
          <Text className="">Search results</Text>
        </View>
      )}
    </View>
  );
};

export default SearchModal;
