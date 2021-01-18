import React from "react";
import Heading from "../layout/Heading";
import ArticleList from "../article/ArticleList";

export function AllArticles() {
	return (
		<>
            <Heading title="Search Articles"/>
			<ArticleList />
		</>
	);
}

export default AllArticles;
