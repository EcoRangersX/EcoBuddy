import { ScrollView } from 'react-native';
import Header from '@/components/Header';
import EcoFriendlyArticlesSection from '@/components/articles/EcoFriendlyArticlesSection';
import { ecoFriendlyArticlesStatic } from '@/constants/StaticData';
import SearchModal from '@/components/articles/SearchModal';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <SearchModal />
      <EcoFriendlyArticlesSection articles={ecoFriendlyArticlesStatic} />
    </ScrollView>
  );
}
