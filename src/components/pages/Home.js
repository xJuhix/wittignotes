import React from "react";
import Heading from "../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export function Home() {
	return (
		<>
		<Jumbotron className="jumbotron-Index">
			<Container>
				<Heading title="My opinions and views on Books, Economics and Productivity" />
			</Container>	
		</Jumbotron>

		<h2>Meet Me</h2>
		<Container>		
		<Row>
			<Col className="intro-Image">
				<img src="images/fw.jpeg" class="img-responsive header-img" alt="Felix Wittig"/>
			</Col>
			<Col className="intro-Text">
				<p>
					Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
					aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
					eget massa.
				</p>
			</Col>
		</Row>
		</Container>

		<Container className="recent-Articles">
			
		</Container>
		</>
	);
}

export default Home;
