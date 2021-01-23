import React from "react";
import Heading from "../layout/Heading";
import ArticleList from "../article/ArticleList";
import Footer from "../layout/Footer";

export function AllArticles() {
	return (
		<>
            <Heading title="Search Articles"/>
			<ArticleList />
			<Footer/>
		</>
	);
}

export default AllArticles;
