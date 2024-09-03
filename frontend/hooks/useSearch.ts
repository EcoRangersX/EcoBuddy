import { useState, useEffect } from 'react';
import { ArticleProps } from '@/types/articles';

export const useSearch = (articles: ArticleProps[], featuredArticles: ArticleProps[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState<ArticleProps[]>(featuredArticles);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredArticles(featuredArticles);
      setShowResults(false);
    } else {
      const results = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(results);
      setShowResults(true);
    }
  }, [searchQuery, articles, featuredArticles]);

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredArticles(featuredArticles);
    setShowResults(false);
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredArticles,
    showResults,
    clearSearch,
  };
};
