import React from "react";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookImg from "../images/bookshelf.jpg";
import BookArticles from "../article/BookArticles";
import Footer from "../layout/Footer";





export function Books() {
	return (
		<>
		<Container fluid className="container-category">
			<Row >
				<Col sm={12} lg={6} className="column-content">
					<Heading title="Books" />
					<blockquote className="blockquote">
						<q className="mb-0">All knowledge is worth having</q>
						<footer className="blockquote-footer">Jacqueline Carey</footer>
					</blockquote>
					<p className="category-description">
						Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
						aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
						eget massa.
					</p>
				</Col>
				<Col sm={12} lg={6} className="column-image">
					<img src={BookImg} className="cateogry-image" alt="Bookshelf and lamp" />
				</Col>
			</Row>
		</Container>
		
		<h2>Book Articles</h2>
		<BookArticles/>

		<Footer/>
		</>
	);
}

export default Books;

