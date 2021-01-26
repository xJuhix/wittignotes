import React, { useState, useEffect } from "react";
import { RECENTARTICLES_URL } from "../../constants/api";
import RecentArticleItem from "./RecentArticleItem";
import Row from "react-bootstrap/Row";



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
            
            {articles.map(recent => ( 
                <Row sm={6} md={3} key={recent.id} >
                    <RecentArticleItem id={recent.id} date_={recent.acf.date_} category_={recent.acf.category_} title={recent.title.rendered} /> 
                </Row>
            ))}
            
        </>
    );
}


export default RecentArticles;