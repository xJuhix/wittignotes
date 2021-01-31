/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from '../layout/Heading';
import BookImg from '../images/bookshelf.jpg';
import BookArticles from '../article/BookArticles';
import Footer from '../layout/Footer';

export function Books() {
  return (
    <>
      <div className="category">
        <Row>
          <Col sm={12} lg={6} className="category__content">
            <Heading title="Books" />
            <blockquote className="category__blockquote blockquote ">
              <q className="mb-0">There is more treasure in books than in all the pirate’s loot on Treasure Island.</q>
              <footer className="blockquote-footer">Walt Disney</footer>
            </blockquote>
            <div className="category__text">
              <p>
                If I had to put a price tag on the insights I have gained from books
                I don't think I could. Books offer a tremendous amount of value and
                in my opinion are the best investment one can make. Its very hard to
                sit down with people like Benjamin Graham, Malcom Gladwell, Hans Rosling
                or all the other great thinkers of our time but we can always read their
                books. In this category I will share my latest reads but also the books
                that currently are in my book bag.
              </p>
              <p>
                Check out my book bag
                {' '}
                <a href="https://www.goodreads.com/review/list/93584625?ref=nav_mybooks" aria-label=" Felix Wittig Reading List" className="category__text-link">here</a>
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} className="category__image">
            <img src={BookImg} className="image-category" alt="Bookshelf and lamp" />
          </Col>
        </Row>
      </div>

      <h2>Book Articles</h2>
      <div className="category-articles">
        <BookArticles />
      </div>

      <Footer />
    </>
  );
}

export default Books;
