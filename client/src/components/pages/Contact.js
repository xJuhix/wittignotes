import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../contact/ContactForm';

export function Contact() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>WittigNotes | Contact</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="WittigNotes is a blog developed to share opinions, reviews and tips on Books, Economics and Productivity"
        />

        <meta
          name="keywords"
          content="blog, tips, opinions, books, economics, productivity, reviews, "
        />
      </Helmet>

      <ContactForm />
    </div>
  );
}

export default Contact;
