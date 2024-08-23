import { FlatList } from 'react-native';
import FilteredArticle from './FilteredArticle';

type FilteredArticlesListProps = {
  articles: { id: number; title: string; previewImageUrl: string }[];
};

const FilteredArticlesList = ({ articles }: FilteredArticlesListProps) => {
  return (
    <FlatList
      className=""
      data={articles}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <FilteredArticle article={item} />}
    />
  );
};

export default FilteredArticlesList;
