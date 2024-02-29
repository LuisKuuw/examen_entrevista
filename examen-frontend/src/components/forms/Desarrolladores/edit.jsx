import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getDesarroladorById, updateDesarrollador } from "../../../api/Desarrolladores";
import { toast } from "react-toastify";

export default function EditDesarrollador({ setRefreshTable, id_edit, setTypeControl }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        getDesarroladorById(id_edit).then(response => {
            setData(response.data.response);
        });

    }, []);

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {

        e.preventDefault();

        updateDesarrollador(data).then(response => {

            const respuesta = response.data;

            if (respuesta.response == "ok") {
                const number = Math.random(300);
                setRefreshTable(number);
                toast.success("Registro Editado con èxito");
                setTypeControl("Add");
            }

        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <Form onSubmit={onSubmit}>

                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="NOMBRE"
                            value={data.NOMBRE}
                            onChange={(e) => onChange(e)}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="number"
                            name="EDAD"
                            value={data.EDAD}
                            onChange={(e) => onChange(e)}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Habilidades</Form.Label>
                        <Form.Control
                            type="text"
                            name="HABILIDAD"
                            value={data.HABILIDAD}
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