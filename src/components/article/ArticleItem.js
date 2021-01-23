import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaClock, FaUser, FaCalendarDay, FaFolder} from "react-icons/fa";

function ArticleItem({ image_, title, excerpt, readtime_, date_, author_, id, category_ }) {
	return (
		<Card>
			<Card.Img variant="top" src={image_} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text dangerouslySetInnerHTML={{__html: excerpt }}></Card.Text>
                <Card.Text><span><FaClock size="1rem"/></span> Read-time: {readtime_} </Card.Text>
                <Card.Text><span><FaCalendarDay size="1rem"/></span> {date_} </Card.Text>
				<Card.Text><span><FaFolder size="1rem"/></span> {category_} </Card.Text>
				<Card.Text><span><FaUser size="1rem"/></span> {author_} </Card.Text>
				<Link to={"/article/" + id}>
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