import React, { useState, useEffect } from "react";
import { RECENTARTICLES_URL } from "../../constants/api";
import RecentArticleItem from "./RecentArticleItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function RecentArticles() {
    const [articles, setRecentArticles] = useState([]);
    const url = RECENTARTICLES_URL;

    // Getting the articles from API
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setRecentArticles(json)
            })
            .catch(error => console.log(error));
    }, [url])


    return (
		<> 
            <Row>
            {articles.map(recent => (
                <>
                    <Col sm={6} md={3} key={recent.id}>
                        <RecentArticleItem id={recent.id} date_={recent.acf.date_} category_={recent.acf.category_} title={recent.title.rendered} />
                    </Col>
                </>
            ))}
            </Row>
        </>
    );
}


export default RecentArticles;