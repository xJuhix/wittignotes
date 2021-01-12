import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Economics from "../pages/Economics";
import Productivity from "../pages/Productivity";
import Contact from "../pages/Contact";
import ArticleList from "../article/ArticleList";
import ArticleDetail from "../article/ArticleDetail";
import logo from "../images/logo.png";

function Layout() {
	return (
		<Router>
			<Navbar expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand href="#home">
						<img
							src={logo}
							width="250"
							height="70"
							className="d-inline-block align-top"
							alt="WittigNotes logo"
      					/>
					</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<NavLink to="/books" className="nav-link">
							Books
						</NavLink>
						<NavLink to="/economics" className="nav-link">
							Economics
						</NavLink>
						<NavLink to="/productivity" className="nav-link">
							Productivy
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
						<NavLink to="/article" className="nav-link">
							Search
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/books" component={Books} />
					<Route path="/economics" component={Economics} />
					<Route path="/productivity" component={Productivity} />
					<Route path="/contact" component={Contact} />
					<Route path="/article" component={ArticleList} />
					<Route path="/article/:id" component={ArticleDetail} />
				</Switch>
			</Container>
		</Router>
	);
}
export default Layout;
