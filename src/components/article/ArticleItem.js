import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ArticleItem({ image, title, excerpt, readtime_, date, author, id }) {
	return (
		<Card>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text dangerouslySetInnerHTML={{__html: excerpt }}></Card.Text>
                <Card.Text> Read-time: {readtime_} </Card.Text>
                <Card.Text> {date} </Card.Text>
				<Card.Text> {author} </Card.Text>
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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    readtime_: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
	
};

export default ArticleItem;