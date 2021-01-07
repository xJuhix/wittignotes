import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import ArticleDetail from "../article/ArticleDetail";

function Layout() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand>RAWG Video Games</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" exact className="nav-link">
							Home
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/article/:id" component={ArticleDetail} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;