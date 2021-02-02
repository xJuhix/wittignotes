/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import { RECENTARTICLES_URL } from '../../constants/api';
import RecentArticleItem from './RecentArticleItem';

function RecentArticles() {
  const [articles, setRecentArticles] = useState([]);
  const url = RECENTARTICLES_URL;
  const [hasError, setError] = useState(false);

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentArticles(json);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return (
    <>
      {articles.map((recent) => (
        <Col sm={6} md={3} key={recent.id}>
          <RecentArticleItem
            id={recent.id}
            date_={recent.acf.date_}
            category_={recent.acf.category_}
            title={recent.title.rendered}
          />
        </Col>
      ))}
    </>
  );
}

export default RecentArticles;
