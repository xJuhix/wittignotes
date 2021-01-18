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
            {articles.map(item => {
                <>
                    <Col sm={6} md={3} key={item.id}>
                        <ArticleItem id={item.id} date_={item.acf.date_} author_={item.acf.author_} category_={item.acf.category_} title={item.title.rendered} excerpt={item.excerpt.rendered} image_={item.acf.image_ } readtime_={item.acf.readtime_} />
                    </Col>
                </>
                }
            )}
            </Row>
        </>
    );
}


export default BookArticles;