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
import Footer from '../layout/Footer';

function ArticleDetails() {
  const [article, setArticle] = useState(false);

  const { id } = useParams();

  const url = `${BASE_URL}/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setArticle(json);
        console.log(json);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <>
      <div className="article">
        {article && (
          <>
            <div className="article__header">
              <Container>
                <h3 className="article__subtitle">
                  {article.acf.category_}
                </h3>
                <Heading
                  className="article__title"
                  title={article.title.rendered}
                />
                <Col className=" article__header--image">
                  <Image
                    src={article.acf.image_.url}
                    width="100%"
                    className="article-img"
                  />
                </Col>
                <Row className="article-info">
                  <p className="article__header--item">
                    <span>
                      <FaUser size="1em" />
                    </span>
                    {article.acf.author_}
                  </p>
                  <p className="article__header--item">
                    <span>
                      <FaClock size="1rem" />
                    </span>
                    {article.acf.readtime_}
                  </p>
                  <p className="article__header--item">
                    <span>
                      <FaCalendarDay size="1rem" />
                    </span>
                    {article.acf.date_}
                  </p>
                </Row>
              </Container>
            </div>
            <Container className="article__body">
              <Col className="article__body--text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: article.excerpt.rendered,
                  }}
                />
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
      <>
        <Footer />
      </>
    </>
  );
}

export default ArticleDetails;
