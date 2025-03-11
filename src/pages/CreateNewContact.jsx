import React, { useState } from 'react'

const CreateNewContact = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPhone" onChange={(event) => {
                        setPhone(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" onChange={(event) => {
                        setAddress(event.target.value)
                    }} />

                </div>

                <button type="button" className="btn btn-primary">Register Contact</button>
            </form>

        </div>
    )
}

export default CreateNewContact
