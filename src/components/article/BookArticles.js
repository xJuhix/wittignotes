import React, { useState, useEffect } from "react";
import { BASE_URL, BOOK_URL } from "../../constants/api";
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
            {article.map(item => {
                    <Col sm={6} md={3} key={article.id}>
                        <ArticleItem id={article.id} date_={article.acf.date_} author_={article.acf.author_} category_={article.acf.category_} title={article.title.rendered} excerpt={article.excerpt.rendered} image_={article.acf.image_ } readtime_={article.acf.readtime_} />
                    </Col>
                }
            )}
            </Row>
        </>
    );
}


export default BookArticles;