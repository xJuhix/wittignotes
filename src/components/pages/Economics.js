import React from "react";
import Heading from "../layout/Heading";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EconomicsArticles from "../article/EconomicsArticles";
import Footer from "../layout/Footer";


export function Economics() {
	return (
		<>
        <Container fluid>
            <Row>
                <Col sm={7}>
                    <div className="page-Image">
                        <img src="images/fw.png" alt="felix wittig"/>
                    </div>
                </Col>
                <Col sm={5} className="header-Content">
                    <Col>
                        <Heading title="Economics"/>
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
            </Row>
        </Container>
		<Container className="container-articles">
			<Row>
				<h2>Economics Articles</h2>
			</Row>
            
            <EconomicsArticles/>

		</Container>
        <Footer/>
		</>
	);
}

export default Economics;
