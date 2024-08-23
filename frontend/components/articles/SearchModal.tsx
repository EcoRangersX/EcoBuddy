import { View } from 'react-native';
import { useState } from 'react';
import SearchBar from './SearchBar';
import FilteredArticlesList from './FilteredArticleList';
import { filteredArticlesStatic } from '@/constants/StaticData';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const clearQuery = () => {
    setSearchQuery('');
  };

  return (
    <View className="relative">
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        clearQuery={clearQuery}
      />
      {searchQuery.length > 0 && (
        <View className="absolute top-full left-5 bg-white shadow-xl shadow-black rounded-lg w-[90%] mx-auto z-10">
          {/* Potential issue: Nested FlatList inside ScrollView */}
          {/* Display filtered results in a list */}
          <FilteredArticlesList articles={filteredArticlesStatic} />
        </View>
      )}
    </View>
  );
};

export default SearchModal;
