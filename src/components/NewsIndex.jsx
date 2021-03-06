import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import NewsService from '../modules/NewsService';
import NewsCard from './NewsCard';

const NewsIndex = () => {
  const dispatch = useDispatch();
  const newsFeed = useSelector((state) => state.newsFeed);

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await NewsService.index();
      dispatch({ type: 'SET_NEWS_FEED', payload: articlesData.articles });
    };
    getArticles();
  }, [dispatch]);

  return (
    <Card.Group data-cy="index" itemsPerRow={4}>
      {newsFeed.map((article, index) => {
        return (
          <NewsCard
            id={index}
            imageUrl={article.urlToImage}
            title={article.title}
            author={article.author}
            description={article.description}
            publishedDate={article.publishedAt}
          />
        );
      })}
    </Card.Group>
  );
};

export default NewsIndex;
