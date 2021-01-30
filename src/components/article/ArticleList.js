import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_URL } from '../../constants/api';
import ArticleSearch from './ArticleSearch';
import ArticleItem from './ArticleItem';

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [filtredArticles, setFilteredArticles] = useState([]);

  // Getting the articles from API
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setArticles(json);
        setFilteredArticles(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchArticles = function (event) {
    console.log(event.target.value);
    const searchText = event.target.value.toLowerCase();
    const filteredArray = articles.filter((article) => article.title.rendered.toLowerCase().includes(searchText));
    setFilteredArticles(filteredArray);
  };

  return (
    <>
      <ArticleSearch handleSearch={searchArticles} />
      <Row>
        {filtredArticles.map((article) => (
          <Col sm={6} md={3} key={article.id}>
            <ArticleItem 
            id={article.id} 
            date_={article.acf.date_} 
            author_={article.acf.author_}
            category_={article.acf.category_}
            title={article.title.rendered}
            excerpt={article.excerpt.rendered}
            image_={article.acf.image_.url} 
            readtime_={article.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllArticles;
