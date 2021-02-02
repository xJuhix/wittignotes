import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Heading from '../layout/Heading';
import ProductivityArticles from '../article/ProductivityArticles';
import Footer from '../layout/Footer';
import ProductivityImg from '../../images/productivityimg.jpg';

export function Productivity() {
  return (
    <>
      <div className="category">
        <Row>
          <Col sm={12} lg={6} className="category__content">
            <Heading title="Productivity" />
            <blockquote className="category__blockquote">
              <q>Focus on being productive instead of busy.</q>
              <footer className="blockquote-footer">
                Tim Ferris
              </footer>
            </blockquote>
            <div className="category__text">
              <p>
                We all are very busy especially in the 21st century.
                With all these distractions around us staying
                productive can be incredible hard. There is always
                another email another text or another meeting. In the
                rush of the moment we tend to forget that being busy
                and being productive are two completely different
                things. In this category I will share some of the
                productivity hacks that I use and how you can
                implement them in your life as well.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} className="category__image">
            <img
              src={ProductivityImg}
              className="image"
              alt="Computer and plant"
            />
          </Col>
        </Row>
      </div>

      <h2>Productivity Articles</h2>
      <div>
        <ProductivityArticles />
      </div>
      <Footer />
    </>
  );
}

export default Productivity;
