/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ECONOMICS_URL } from '../../constants/api';

import ArticleItem from './ArticleItem';

function EconomicsArticles() {
  const [articles, setEconomicsArticles] = useState([]);
  const url = ECONOMICS_URL;

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setEconomicsArticles(json);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <>
      <Row>
        {articles.map((economics) => (
          <Col sm={12} md={6} lg={4} xl={3} key={economics.id}>
            <ArticleItem
              id={economics.id}
              date_={economics.acf.date_}
              author_={economics.acf.author_}
              category_={economics.acf.category_}
              title={economics.title.rendered}
              excerpt={economics.excerpt.rendered}
              image_={economics.acf.image_.url}
              readtime_={economics.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default EconomicsArticles;
