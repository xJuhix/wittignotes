/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaClock, FaUser, FaCalendarDay } from 'react-icons/fa';
import { BASE_URL } from '../../constants/api';
import Heading from '../layout/Heading';

function ArticleDetails() {
  const [article, setArticle] = useState(null);
  const [hasError, setError] = useState(false);

  const { id } = useParams();

  const url = `${BASE_URL}/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setArticle(json);
        console.log(json);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return (
    <>
      <div className="article">
        {article && (
          <>
            <div>
              <Container>
                <h3 className="article__subtitle">
                  {article.acf.category_}
                </h3>
                <Heading title={article.title.rendered} />
                <Col article=" article__image">
                  <Image
                    src={article.acf.image_.url}
                    width="100%"
                    className="article-img"
                  />
                </Col>
                <Row className="article__details">
                  <p>
                    <span>
                      <FaUser size="1em" />
                    </span>
                    {article.acf.author_}
                  </p>
                  <p>
                    <span>
                      <FaClock size="1rem" />
                    </span>
                    {article.acf.readtime_}
                  </p>
                  <p>
                    <span>
                      <FaCalendarDay size="1rem" />
                    </span>
                    {article.acf.date_}
                  </p>
                </Row>
              </Container>
            </div>
            <Container className="article__body">
              <Col className="article__content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: article.content.rendered,
                  }}
                />
              </Col>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default ArticleDetails;
