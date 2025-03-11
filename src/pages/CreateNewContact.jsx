import React, { useState } from 'react'

const CreateNewContact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const handleRegisterContact = async () => {
        const newContact = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        }
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Lalba10col/contacts", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newContact)
            })
            if (!response.ok) {
                throw new Error("No se puede crear el Contacto");
            }

            setName("");
            setPhone("");
            setEmail("");
            setAddress("");

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPhone" value={phone} onChange={(event) => {
                        setPhone(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" value={address} onChange={(event) => {
                        setAddress(event.target.value)
                    }} />

                </div>

                <button type="button" className="btn btn-primary" onClick={handleRegisterContact}>Register Contact</button>
            </form>

        </div>
    )
}

export default CreateNewContact
