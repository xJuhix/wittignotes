import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../pages/Contact";
import ArticleList from "../article/ArticleList";
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
					<Route path="/books" component={Contact} />
					<Route path="/economics" component={Contact} />
					<Route path="/productivity" component={Contact} />
					<Route path="/contact" component={Contact} />
					<Route path="/article" component={ArticleList} />
					<Route path="/article/:id" component={ArticleDetail} />
				</Switch>
			</Container>
		</Router>
	);
}
export default Layout;
