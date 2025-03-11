import { useEffect } from "react";
//import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

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

	const deleteContact = async (id) => {
		try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/Lalba10col/contacts/${id}`, {
				method: "DELETE"
			});
			if (!response.ok) throw new Error("Error eliminando el contacto");
	
			// Actualizar el estado eliminando el contacto de la lista
			setStore({
				contacts: getStore().contacts.filter(contact => contact.id !== id)
			});
		} catch (error) {
			console.error("Error:", error);
		}
	}

	useEffect(() => {
		obtenerContactos();
	}, []);

	return (
		<div className="text-center mt-5">
			<ul>
				{store.contacts.map((value, index) => {

					return <li key={value.id}> {value.name} </li>
				})}
			</ul>
		</div>
	);
}; 