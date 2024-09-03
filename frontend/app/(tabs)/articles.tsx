import { ScrollView } from 'react-native';
import Header from '@/components/Header';
import EcoFriendlyArticlesSection from '@/components/articles-to-change/EcoFriendlyArticlesSection';
import { ecoFriendlyArticlesStatic } from '@/constants/StaticData';
import SearchModal from '@/components/articles-to-change/SearchModal';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <SearchModal />
      <EcoFriendlyArticlesSection articles={ecoFriendlyArticlesStatic} />
    </ScrollView>
  );
}
