import React from "react";
import Heading from "../layout/Heading";
import ContactForm from "../contact/ContactForm";
import Container from "react-bootstrap/Container";
import Footer from "../layout/Footer";

export function Contact() {
	return (
		<>
		<Container className="contact-container rounded">
            <Heading title="Contact Me" />
			<ContactForm />
		</Container>
		<Footer/>
		</>
	);
}

export default Contact;
