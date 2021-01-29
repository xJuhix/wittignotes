import React, { useState, useEffect } from "react";
import Heading from "../layout/Heading";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";
import { FaClock, FaUser, FaCalendarDay, FaFolder} from "react-icons/fa";
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
			<Heading title={article.title.rendered} /> 
			<Container> 
				<Col md={6} className="articleDetail-image"> 
				<Image src={article.acf.image_.url} width="100%" className="article-img"/>
				</Col> 
				<Row className="article-info">
					<ul>
						<li><span><FaUser size="1rem"/></span>{article.acf.author_}</li> 
						<li><span><FaClock size="1rem"/></span>{article.acf.readtime_}</li>
						<li><span><FaFolder size="1rem"/></span>{article.acf.category_}</li>
						<li><span><FaCalendarDay size="1rem"/></span>{article.acf.date_}</li>
					</ul>
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
