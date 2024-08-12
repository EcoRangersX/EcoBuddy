import { ScrollView,View } from 'react-native';
import Header from '@/components/Header';
import EcoFriendlyArticlesSection from '@/components/Articles/EcoFriendlyArticlesSection';
import { ecoFriendlyArticles } from '@/constants/StaticData';
import SearchBar from '@/components/Articles/SearchBar';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <View className="px-3 py-1">
        <SearchBar />
      </View>
      <EcoFriendlyArticlesSection articles={ecoFriendlyArticles} />
    </ScrollView>
  );
}
