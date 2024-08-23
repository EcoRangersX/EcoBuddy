import { View, TextInput } from 'react-native';
import { SearchIcon, ClearQueryIcon } from '../icons/Articles';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  clearQuery: () => void;
  onFocus: () => void;
}

const SearchBar = ({ query, setQuery, clearQuery, onFocus }: SearchBarProps) => {
  return (
    <View className="bg-white border-2 border-[#4ac965] shadow-md shadow-black rounded-full flex-row items-center justify-around px-4 py-2">
      <TextInput
        className="w-[85%] h-12"
        placeholder="Search articles"
        value={query}
        onChangeText={setQuery}
        onFocus={onFocus}
      />
      {query?.length > 0 ? (
        <View className="flex-row items-center">
          <ClearQueryIcon size={36} onPress={() => clearQuery()} />
          <SearchIcon size={36} />
        </View>
      ) : (
        <SearchIcon size={36} />
      )}
    </View>
  );
};

export default SearchBar;
