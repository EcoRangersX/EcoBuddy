import { ScrollView } from 'react-native';
import Header from '@/components/Header';
import EcoFriendlyArticlesSection from '@/components/atri/EcoFriendlyArticlesSection';
import { ecoFriendlyArticlesStatic } from '@/constants/StaticData';

export default function ArticlesScreen() {
  return (
    <ScrollView>
      <Header />
      <EcoFriendlyArticlesSection articles={ecoFriendlyArticlesStatic} />
    </ScrollView>
  );
}
