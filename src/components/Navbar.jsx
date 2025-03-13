import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();

	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-between mx-3">
			{/* Texto en el lado izquierdo */}
			<Link to="/" className="navbar-brand mb-0 h1">
				Contact List React & Context
			</Link>

			{/* Botón en el lado derecho (solo se muestra si estamos en la página de inicio) */}
			{location.pathname === "/" && (
				<Link to="/create-new-contact">
					<button className="btn btn-success">
						Add New Contact
					</button>
				</Link>
			)}
		</nav>
	);
};