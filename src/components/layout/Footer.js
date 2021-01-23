import React from "react";
import { FaGoodreadsG,FaYoutube, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Footer() {

    return (
        <>
        <footer className="footer">
        <Row>
          <Col md={4}>
            <span>&copy; 2020 Wittig Notes</span>
          </Col>
          <Col md={4} className="socaialLinks">
            <a href="https://www.goodreads.com/review/list/93584625?ref=nav_mybooks"><span><FaGoodreadsG size="2rem"/></span></a>
            <a href="https://www.youtube.com/channel/UC6HslxZb3iZMZcc8mj32cyQ"><span><FaYoutube size="2rem"/></span></a>
            <a href="https://www.instagram.com/felix_9727/?hl=en"><span><FaInstagram size="2rem"/></span></a>
            <a href="https://www.facebook.com/felix.wi.355"><span><FaFacebook size="2rem"/></span></a>
            <a href="https://twitter.com/felix_wittig?lang=en"><span><FaTwitter size="2rem"/></span></a>
          </Col>
      </Row>
      </footer>
      </>
    );
}


export default Footer;