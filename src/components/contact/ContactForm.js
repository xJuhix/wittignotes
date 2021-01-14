import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Form, Button} from "react-bootstrap";
import ErrorMessage from "./ErrorMessage";


const schema = yup.object().shape({
    
    fullName: yup
        .string()
        .required("Full name is required")
        .min(3, "Your full name must contain at least 3 characters"),

    email: yup
        .string()
        .email('Invalid email')
        .required("A valid Email is required"),

    messageField: yup
        .string()
        .required("Message is required")
        .min(10, "Your message must contain at least 10 characters")
});

function ContactForm() {
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const [sent, setSent] = React.useState(false);

    function onSubmit(data) {
        console.log("data", data);
        setSent(true);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {sent && <div className="validationMessage"> 
                        <h3>Thank you!</h3> 
                        <p>Your message has been successfully sent. We will contact you very soon!</p>
                    </div> 
            }
            <Form.Group>
                <Form.Label>Full name:</Form.Label>
                <Form.Control type="text" name="fulltName" placeholder="Enter your full name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email:</Form.Label>    
                <Form.Control type="text" name="email" placeholder="Enter your Email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" name="messageField" type="text" placeholder="Enter your Message" ref={register} />
                {errors.messageField && <ErrorMessage>{errors.messageField.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit" variant="primary">Submit</Button>     
        </Form>
        
    );
}

export default ContactForm;