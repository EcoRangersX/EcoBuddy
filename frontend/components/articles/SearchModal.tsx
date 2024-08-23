import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { CloseSideBarIcon } from '../Icons/HomeIcons';
import FilteredArticlesList from './FilteredArticleList';
import { filteredArticles } from '@/constants/StaticData';

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSearch, setOpenSearch] = useState(false);

  const clearQuery = () => {
    setSearchQuery('');
  };

  const onSearchBarFocus = () => {
    setOpenSearch(true);
  };

  return (
    <View className="relative">
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        clearQuery={clearQuery}
        onFocus={onSearchBarFocus}
      />
      {openSearch && (
        <Modal
          className="absolute top-full right-0 left-0"
          transparent={true}
          visible={openSearch}
          onRequestClose={() => {
            setOpenSearch(false);
          }}>
          <View className="bg-white shadow-xl shadow-black rounded-lg h-[80%] w-[90%] mx-auto top-[16%]">
            <TouchableOpacity
              className="self-end"
              onPress={() => setOpenSearch(false)}>
              <CloseSideBarIcon />
            </TouchableOpacity>
            <Text className="text-lg font-bold mb-4">Search results</Text>
            {/* Add your search results here */}
            <FilteredArticlesList articles={filteredArticles} />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default SearchModal;
