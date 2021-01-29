import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";
import { FaClock, FaUser, FaCalendarDay} from "react-icons/fa";
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
		<div className="articledetails">
			{article && 
			<>
			<h3>{article.acf.category_}</h3>
			<Heading title={article.title.rendered} /> 
			<Container> 
				<Col className="articleDetail-image"> 
				<Image src={article.acf.image_.url} width="100%" className="article-img"/>
				</Col> 
				<Row className="article-info"> 
					<p><span><FaUser size="1em"/></span>{article.acf.author_}</p> 
					<p><span><FaClock size="1rem"/></span>{article.acf.readtime_}</p>
					<p><span><FaCalendarDay size="1rem"/></span>{article.acf.date_}</p>
				</Row> 
				<Col className="article-text">
					<p dangerouslySetInnerHTML={{__html: article.excerpt.rendered }}></p>
					<p dangerouslySetInnerHTML={{__html: article.content.rendered}}></p> 
				</Col> 
			</Container>
			
			</> 
			}
		</div>
		<>
			<Footer/>
		</> 
		</>
		
	);
	 
}

export default ArticleDetails;
