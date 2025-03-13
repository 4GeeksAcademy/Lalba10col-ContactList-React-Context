import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const DeleteContact = ({ id }) => {
    const { dispatch } = useGlobalReducer(); // Usamos el dispatch para actualizar el estado global

    const eliminarContacto = async (contactId) => {

        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Lalba10col/contacts/${contactId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error("No se pudo eliminar el contacto");
            }
            dispatch({
                type: "delete_contact",
                payload: { id: contactId },
            });

        } catch (error) {
            console.error("Error al eliminar el contacto:", error);
        }
    };

    return (
        <button
        onClick={() => eliminarContacto(id)}
        style={{
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: 'gray',
        }}
        title="Delete Contact"
      >
        <i className="fas fa-trash-alt" style={{ fontSize: '20px' }}></i>
      </button>
    );
  };

export default DeleteContact;
