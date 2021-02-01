import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

function RecentArticleItem({ title, date_, category_, id }) {
  return (
    <>
      <div className="recentarticle__card">
        <Link to={`/article/${id}`}>
          <Row>
            <p>
              {title}, {category_}, {date_}{' '}
            </p>
          </Row>
        </Link>
      </div>
    </>
  );
}

RecentArticleItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category_: PropTypes.string.isRequired,
  date_: PropTypes.string.isRequired,
};

export default RecentArticleItem;
