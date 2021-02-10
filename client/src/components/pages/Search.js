import React from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../layout/Heading';
import ArticleList from '../article/ArticleList';

export function AllArticles() {
  return (
    <>
      <div>
        <Helmet>
          <html lang="en" />
          <title>WittigNotes | Search</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="WittigNotes is a blog developed to share opinions, reviews and tips on Books, Economics and Productivity"
          />
        </Helmet>
      </div>
      <div className="search__page">
        <Heading title="Search Articles" />
        <ArticleList />
      </div>
    </>
  );
}

export default AllArticles;
