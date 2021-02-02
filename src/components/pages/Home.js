import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Heading from '../layout/Heading';
import Felix from '../../images/fw.png';
import RecentArticles from '../article/RecentArticles';

export function Home() {
  return (
    <>
      <Jumbotron>
        <Container>
          <Heading title="My opinions and views on Books, Economics and Productivity" />
        </Container>
      </Jumbotron>

      <h2>Meet Me</h2>

      <Container className="about">
        <Row>
          <Col lg={5} className="about__image">
            <img src={Felix} className="photo" alt="Felix Wittig" />
          </Col>
          <Col lg={7} className="about__text">
            <h3>Felix Wittig</h3>
            <p>
              Hi friends, my name is Felix and I am a Business
              Administration student based in Germany and I truly
              believe that most of worlds problems can be solved with
              good economics. I also love reading and am an absolute
              productivity nerd.
            </p>
          </Col>
        </Row>
      </Container>

      <h2>Recent Articles</h2>

      <div className="recentarticles">
        <RecentArticles />
      </div>
    </>
  );
}

export default Home;
