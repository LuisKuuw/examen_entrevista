import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { postDesarrollador } from "../../../api/Desarrolladores";
import { toast } from "react-toastify";

export default function AddDesarrollador({ setRefreshTable }) {

    const [valoresIniciales, setValoresIniciales] = useState({
        NOMBRE: '',
        EDAD: '',
        HABILIDAD: ''
    });

    const onChange = (e) => {
        setValoresIniciales({ ...valoresIniciales, [e.target.name]: e.target.value });
    }


    const onSubmit = (e) => {

        e.preventDefault();

        //se llama a a funcion de post
        postDesarrollador(valoresIniciales).then(response => {

            const data = response.data;

            if (data.response == "ok") {
                const number = Math.random(300);
                setRefreshTable(number);
                toast.success("Registro Agregado con èxito");
                document.getElementById("form_add").reset();
            }

        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <Form onSubmit={onSubmit} id="form_add">

                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="NOMBRE"
                            onChange={(e) => onChange(e)}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="number"
                            name="EDAD"
                            onChange={(e) => onChange(e)}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Habilidades</Form.Label>
                        <Form.Control
                            type="text"
                            name="HABILIDAD"
                            onChange={(e) => onChange(e)}
                            required />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary">Guardar</Button>
                    </div>

                </Form>
            </div>
        </div>
    );


}