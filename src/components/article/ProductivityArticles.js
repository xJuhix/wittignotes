/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PRODUCTIVY_URL } from '../../constants/api';
import ArticleItem from './ArticleItem';

function ProductivityArticles() {
  const [articles, setProductivityArticles] = useState([]);
  const url = PRODUCTIVY_URL;

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProductivityArticles(json);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <>
      <Row>
        {articles.map((productivity) => (
          <Col sm={6} md={3} key={productivity.id}>
            <ArticleItem
              id={productivity.id}
              date_={productivity.acf.date_}
              author_={productivity.acf.author_}
              category_={productivity.acf.category_}
              title={productivity.title.rendered}
              excerpt={productivity.excerpt.rendered}
              image_={productivity.acf.image_.url}
              readtime_={productivity.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductivityArticles;
