import React from "react";
import Heading from "../layout/Heading";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export function Productivity() {
	return (
		<>
		<Container fluid>
            <Row>
                <Col sm={5} className="header-Content">
                    <Col>
                        <Heading title="Productivity"/>
                    </Col>
                    <Col>
                        <div className="about-Books">
				            <p>
					            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
					            aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
					            eget massa.
				            </p>
			            </div>
                    </Col>
                </Col>
                <Col sm={7}>Productivity Image</Col>
            </Row>
        </Container>
		<Container className="container-articles">
			<Row>
				<h2>Productivity Articles</h2>
			</Row>

		</Container>
		</>
	);
}

export default Productivity;
