import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container">
				<a className="navbar-brand text-white" href="#">
					Start Bootstrap
				</a>

				<div className="navbar-nav ms-auto">
					<a className="nav-link text-white" href="#">Home</a>
					<a className="nav-link text-white" href="#">About</a>
					<a className="nav-link text-white" href="#">Services</a>
					<a className="nav-link text-white" href="#">Contact</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;