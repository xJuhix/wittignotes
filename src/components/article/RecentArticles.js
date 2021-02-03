/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { RECENTARTICLES_URL } from '../../constants/api';
import RecentArticleItem from './RecentArticleItem';

function RecentArticles() {
  const [articles, setRecentArticles] = useState([]);
  const url = RECENTARTICLES_URL;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentArticles(json);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [url]);

  if (hasError) {
    return <Alert variant="warning" className="erroralert" />;
  }
  if (loading) {
    return <Spinner animation="border" className="spinner" />;
  }
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
