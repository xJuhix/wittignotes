import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "../contact/ContactForm";
import Container from "react-bootstrap/Container";

export function Contact() {
	return (
		<>
		<Container className="contact-container rounded">
            <Heading title="Contact Me" />
			<ContactForm />
		</Container>
		</>
	);
}

export default Contact;
