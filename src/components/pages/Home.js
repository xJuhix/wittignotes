import React from "react";
import Heading from "../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


export function Home() {
	return (
		<>
		<Jumbotron>
			<Container>
				<Heading title="My opinions and views on Books, Economics and Productivity" />
			</Container>	
		</Jumbotron>

		</>
	);
}

export default Home;
