import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ArticleItem({ featured_image, title, excerpt, readtime, date, id }) {
	return (
		<Card>
			<Card.Img variant="top" src={featured_image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
                <Card.Text>{excerpt} </Card.Text>
                <Card.Text> Read-time: {readtime} </Card.Text>
                <Card.Text> {date} </Card.Text>
				<Link to={"article/" + id}>
					<Button variant="secondary" block>
						Read Article
					</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

ArticleItem.propTypes = {
    featured_media: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    readtime: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
	
};

export default ArticleItem;