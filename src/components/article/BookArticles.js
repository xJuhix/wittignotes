import React, { useState, useEffect } from "react";
import { BOOK_URL } from "../../constants/api";
import ArticleItem from "./ArticleItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function BookArticles() {
    const [articles, setBookArticles] = useState([]);
    const url = BOOK_URL;

    // Getting the articles from API
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setBookArticles(json)
            })
            .catch(error => console.log(error));
    }, [url])


    return (
		<> 
            <Row>
            {articles.map(book => (
                <Col sm={6} md={3} key={book.id}>
                    <ArticleItem id={book.id} date_={book.acf.date_} author_={book.acf.author_} category_={book.acf.category_} title={book.title.rendered} excerpt={book.excerpt.rendered} image_={book.acf.image_.url } readtime_={book.acf.readtime_} />
                </Col>
            ))}
            </Row>
        </>
    );
}


export default BookArticles;