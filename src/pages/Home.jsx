import { useEffect } from "react";
//import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import DeleteContact from "/workspaces/Lalba10col-ContactList-React-Context/src/pages/DeleteContact.jsx";


const API_URL_BASE = 'https://playground.4geeks.com/contact';

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const obtenerContactos = async () => {
		try {
			const response = await fetch(API_URL_BASE + '/agendas/Lalba10col');

			if (!response.ok) {
				throw new Error("Ocurrio un error al obtener los contactos");

			}

			const data = await response.json();
			dispatch({ type: "set_contacts", payload: { contacts: data.contacts } })
		} catch (error) {

		}
	};

	useEffect(() => {
		obtenerContactos();
	}, []);

	return (
		<div className="text-center mt-5">
			<ul>
				{store.contacts.map((contact) => {
					return (
						<li key={contact.id} className="d-flex align-items-center mb-3">
							{/* Imagen a la izquierda */}
							<img
								src="https://picsum.photos/100/100"
								alt={contact.name}
								style={{
									width: '100px', 
									height: '100px', 
									borderRadius: '50%', 
									marginRight: '10px', 
								}}
							/>

							{/* Información del contacto (a la derecha de la imagen) */}
							<div style={{ flex: '1', paddingRight: '10px', textAlign: 'left' }}>
								<span><strong>Nombre</strong>: {contact.name}</span>
								<ul style={{ listStyleType: 'none', paddingLeft: '0', margin: 0 }}>
									<li>
										<strong>Teléfono: </strong>{contact.phone}
									</li>
									<li>
										<strong>Correo: </strong>{contact.email}
									</li>
									<li>
										<strong>Dirección: </strong>{contact.address}
									</li>
								</ul>
							</div>

							{/* Botón de eliminar (alineado a la derecha) */}
							<div style={{ marginLeft: 'auto',marginRight: '20px' }}>
								<DeleteContact id={contact.id} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}