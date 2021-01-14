import React from "react";
import Heading from "../layout/Heading";
import Jumbotron from "react-bootstrap/Jumbotron";


export function Contact() {
	return (
		<>
		<Jumbotron className="jumbotron-Books" style={{ backgroundImage: "url(images/booksbanner.jpg)" }}>
        </Jumbotron>
        <Heading title="Books" />
		</>
	);
}

export default Contact;