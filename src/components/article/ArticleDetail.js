import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function ArticleDetails() {
	const [article, setArticle] = useState([]);    

    let { id } = useParams();

	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
            .then(json => {
                setArticle(json)
                console.log (json);
            })
            .catch(error => console.log(error));

	}, [url]);

	return (
		<>
			<Heading title={article.title} />
				<Col>
					<Col md={6} className="articleDetail-image">
						<Image src={article.background_image} width="500" rounded />
					</Col>
                    <Row>
						<p>{article.author}</p>
						<p>{article.readtime}</p>
                        <p>{article.category}</p>
                        <p>{article.date}</p>			
					</Row>
					<Col>
						<h2>{article.name}</h2>
						<p>
							<b>Description:</b>  
						</p>
						<p>
							{article.description_raw}
						</p>			
					</Col>
				</Col>
		</>
	);
}

export default ArticleDetails;