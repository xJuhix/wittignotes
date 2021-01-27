import React from "react";
import Heading from "../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Felix from "../images/fw.png";
import Footer from "../layout/Footer";
import RecentArticles from "../article/RecentArticles";



export function Home() {
	return (
		<>
		<Jumbotron className="jumbotron-Index">
			<Container>
				<Heading title="My opinions and views on Books, Economics and Productivity" />
			</Container>	
		</Jumbotron>

		<h2>Meet Me</h2>

		<Container className="about">		
		<Row>
			<Col lg={5} className="about-image">
				<img src={Felix} id="photo" alt="Felix Wittig" />
			</Col>
			<Col lg={7} className="about-text">
				<h3>Felix Wittig</h3>
				<p>
					Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
					aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
					eget massa.
				</p>
			</Col>
		</Row>
		</Container>

		<h2>Recent Articles</h2>
			
		<Container fluid className="container-recentarticles">
			
			<RecentArticles/>
			
		</Container>
		
		<Footer/>
		
		</>
	);
}

export default Home;
