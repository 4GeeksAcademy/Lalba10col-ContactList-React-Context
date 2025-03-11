import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-center">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List React & Context</span>
			</Link>
		</nav>
	);
};