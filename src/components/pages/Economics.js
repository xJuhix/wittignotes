import React from "react";
import Heading from "../layout/Heading";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import EconomicsArticles from "../article/EconomicsArticles";
import Footer from "../layout/Footer";
import Piggybank from "../images/piggybank.jpg";


export function Economics() {
    return (
		<>
		<Container fluid className="container-category">
            <Row>
				<Col sm={12} lg={6} className="column-content">
                    <Heading title="Economics"/>
					<p className="category-description">
						Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa,
						aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
						eget massa.
					</p>
                </Col>
				<Col sm={12} lg={6} className="column-image">
					<img src={Piggybank} className="cateogry-image" alt="Black piggybank on coins" />
				</Col>
            </Row>
        </Container>
			
		<h2>Economics Articles</h2>
		<div className="category-articles"> 
			<EconomicsArticles/>
		</div>
		
		
		<Footer/>
		</>
	);
}

export default Economics;
