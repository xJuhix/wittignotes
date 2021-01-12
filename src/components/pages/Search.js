import React from "react";
import Heading from "../layout/Heading";
import ArticleList from "../article/ArticleList";

export function Search() {
	return (
		<>
            <Heading title="Search Articles"/>
			<ArticleList />
		</>
	);
}

export default Search;
