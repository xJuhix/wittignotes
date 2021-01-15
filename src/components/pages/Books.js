import React from "react";
import Heading from "../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";




export function Books() {
	return (
		<>
			<Jumbotron className="jumbotron-Books" style={{ backgroundImage: "url(images/booksbanner.jpg)" }}>
        	</Jumbotron>
		<div className="books-Header">
        	<Heading title="Books" />
			<div className="about-Books">
				<p>
					Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
					aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
					eget massa.
				</p>
			</div>
		</div>
		<Container className="container-articles">
			<Row>
				<h2>Book Articles</h2>
			</Row>

		</Container>
		</>
	);
}

export default Books;