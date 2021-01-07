import React from "react";
import {Nav, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import ArticleDetail from "../article/ArticleDetail";

function Layout() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand href="#home">
						<img
							src="../images/logo.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="WittigNotes logo"
      					/>
					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" exact className="nav-link">
							Home
						</NavLink>
						<NavLink to="/books" className="nav-link">
							Books
						</NavLink>
						<NavLink to="/economics" className="nav-link">
							Contact
						</NavLink>
						<NavLink to="/productivity" className="nav-link">
							Contact
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
					<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-light">Search</Button>
				</Form>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/books" component={Contact} />
					<Route path="/economics" component={Contact} />
					<Route path="/productivity" component={Contact} />
					<Route path="/contact" component={Contact} />
					<Route path="/article/:id" component={ArticleDetail} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;