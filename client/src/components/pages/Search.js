import React from 'react';
import Heading from '../layout/Heading';
import ArticleList from '../article/ArticleList';

export function AllArticles() {
  return (
    <>
      <div className="search__page">
        <Heading title="Search Articles" />
        <ArticleList />
      </div>
    </>
  );
}

export default AllArticles;
