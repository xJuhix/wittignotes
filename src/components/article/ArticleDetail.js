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

const useRemoteData = (url, initialData = null) => {
  const [remoteData, setRemoteData] = useState({
    data: initialData,
    loading: false,
    error: null,
  });

  useEffect(() => {
    setRemoteData((prev) => ({ ...prev, loading: true }));

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRemoteData((prev) => ({ ...prev, data }));
      })
      .catch(({ message }) => {
        setRemoteData((prev) => ({ ...prev, error: message }));
      })
      .finally(() => {
        setRemoteData((prev) => ({ ...prev, loading: false }));
      });
  }, [url]);

  return remoteData;
};

function ArticleDetails() {
  const { id } = useParams();
  const { data, loading, error } = useRemoteData(`${BASE_URL}/${id}`);

  return (
    <>
      <div className="article">
        {data && (
          <>
            <div>
              <Container>
                <h3 className="article__subtitle">
                  {data.acf.category_}
                </h3>
                <Heading title={data.title.rendered} />
                <Col className=" article__image">
                  <Image
                    src={data.acf.image_.url}
                    width="100%"
                    className="article-img"
                  />
                </Col>
                <Row className="article__details">
                  <p>
                    <span>
                      <FaUser size="1em" />
                    </span>
                    {data.acf.author_}
                  </p>
                  <p>
                    <span>
                      <FaClock size="1rem" />
                    </span>
                    {data.acf.readtime_}
                  </p>
                  <p>
                    <span>
                      <FaCalendarDay size="1rem" />
                    </span>
                    {data.acf.date_}
                  </p>
                </Row>
              </Container>
            </div>
            <Container className="article__body">
              <Col className="article__content">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data.content.rendered,
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
