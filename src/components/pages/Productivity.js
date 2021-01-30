import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from '../layout/Heading';
import ProductivityArticles from '../article/ProductivityArticles';
import Footer from '../layout/Footer';
import ProductivityImg from '../images/productivityimg.jpg';

export function Productivity() {
  return (
    <>
      <Container fluid className="container-category">
        <Row>
          <Col sm={12} lg={6} className="column-content">
            <Heading title="Productivity" />
            <p className="category-description">
              Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
              a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
              finibus et ac orci. Aliquam metus massa,aliquam quis arcu sit amet,
              consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
              euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
              a, varius eget massa.
            </p>
          </Col>
          <Col sm={12} lg={6} className="column-image">
            <img src={ProductivityImg} className="cateogry-image" alt="Computer and plant" />
          </Col>
        </Row>
      </Container>

      <h2>Productivity Articles</h2>
      <div className="category-articles">
        <ProductivityArticles />
      </div>
      <Footer />
    </>
  );
}

export default Productivity;
