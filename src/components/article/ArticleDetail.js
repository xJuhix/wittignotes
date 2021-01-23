import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";
import Footer from "../layout/Footer";


function ArticleDetails() {
	const [article, setArticle] = useState(false);    

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
			{article && 
			<> 
			<Heading title={article.title.rendered} /> 
			<Col> 
				<Col md={6} className="articleDetail-image"> 
				<Image src={article.acf.image_.url} width="500" rounded />
				</Col> 
				<Row> 
					<p>{article.acf.author_}</p> 
					<p>{article.acf.readtime_}</p>
					<p>{article.acf.category_}</p>
					<p>{article.acf.date_}</p>
				</Row> 
				<Col>
					<p dangerouslySetInnerHTML={{__html: article.excerpt.rendered }}></p>
					<p dangerouslySetInnerHTML={{__html: article.content.rendered}}></p> 
				</Col> 
			</Col> 
			</> 
			}
		<>
			<Footer/>
		</> 
		</>
		
	);
	 
}

export default ArticleDetails;
