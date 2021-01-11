import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import ArticleSearch from "./ArticleSearch";
import ArticleItem from "./ArticleItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
    const [articles, setArticles] = useState([]);
    const [filtredarticles, setFilteredArticles] = useState([]);

    // Getting the articles from API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setArticles(json.results)
                setFilteredArticles(json.results)
            })
            .catch(error => console.log(error));
    }, [])

    const searchArticles = function (event) {
        console.log(event.target.value)
        const searchText = event.target.value.toLowerCase();
        const filteredArray = articles.filter(article => {
            return article.name.toLowerCase().includes(searchText)
        })
        setFilteredArticles(filteredArray);
    }

    return (
        <>
            <ArticleSearch handleSearch={searchArticles} />
            <Row>
                {filtredarticles.map(article => (
                    <Col sm={6} md={3} key={article.id}>
                        <ArticleItem id={article.id} name={article.name} background_image={article.background_image} rating={article.rating} released={article.released} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Home;