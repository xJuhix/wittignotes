import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ArticleItem({ image_, title, excerpt, readtime_, date_, author_, id }) {
	return (
		<Card>
			<Card.Img variant="top" src={image_} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text dangerouslySetInnerHTML={{__html: excerpt }}></Card.Text>
                <Card.Text> Read-time: {readtime_} </Card.Text>
                <Card.Text> {date_} </Card.Text>
				<Card.Text> {author_} </Card.Text>
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
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
    image_: PropTypes.string.isRequired,
	readtime_: PropTypes.string.isRequired,
	category_: PropTypes.string.isRequired,
	date_: PropTypes.string.isRequired,
	author_: PropTypes.string.isRequired,
	
};

export default ArticleItem;