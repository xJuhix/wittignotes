import React from 'react';
import {
  FaGoodreadsG, FaYoutube, FaInstagram, FaFacebook, FaTwitter,
} from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col md={4}>
              <span>&copy; 2020 Wittig Notes</span>
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="socaialLinks">
              <a href="https://www.goodreads.com/review/list/93584625?ref=nav_mybooks" aria-label=" Felix Wittig Reading List"><span><FaGoodreadsG size="2rem" /></span></a>
              <a href="https://www.youtube.com/channel/UC6HslxZb3iZMZcc8mj32cyQ" aria-label="Felix Wittig Youtubepage"><span><FaYoutube size="2rem" /></span></a>
              <a href="https://www.instagram.com/felix_9727/?hl=en" aria-label=" Felix Wittig Instagram"><span><FaInstagram size="2rem" /></span></a>
              <a href="https://www.facebook.com/felix.wi.355" aria-label=" Felix Wittig Facebook"><span><FaFacebook size="2rem" /></span></a>
              <a href="https://twitter.com/felix_wittig?lang=en" aria-label=" Felix Wittig Twitter"><span><FaTwitter size="2rem" /></span></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
