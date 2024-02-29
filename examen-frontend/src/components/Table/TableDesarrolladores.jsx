import { map } from "lodash";
import { Table } from "react-bootstrap";
import Swal from 'sweetalert2';
import { deleteDesarrollador } from "../../api/Desarrolladores";
import { toast } from "react-toastify";

export default function TableDesarrolladores({ data, setRefreshTable ,setTypeControl,setId_edit}) {

    const onEdit = (id)  => {
        setTypeControl("Edit");
        setId_edit(id);
    }

    const onDeleteRow = (id) => {
        
        Swal.fire({
            title: "¿Desea Eliminar el Registro?",
            text: "una vez confirmando la acciòn es irreversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si,Borrar!"
        }).then((result) => {
            if (result.isConfirmed) {

                deleteDesarrollador(id).then(response => {

                    const data = response.data;

                    if (data.response == "ok") {
                        const number = Math.random(300);
                        setRefreshTable(number);
                        toast.success("Registro Eliminado con èxito");
                    }
                });

            }
        });


    }

    return (
        <div className="mt-5">
            <h2>Lista de Desarrolladores</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Habilidades</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        map(data, (item, index) => (
                            <tr key={item.DESARROLADOR_ID}>
                                <td>{(index + 1)}</td>
                                <td>{item.NOMBRE}</td>
                                <td>{item.EDAD}</td>
                                <td>{item.HABILIDAD}</td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-primary" onClick={() => onEdit(item.DESARROLADOR_ID)}>Editar</button>
                                        <button type="button" className=" ms-3 btn btn-danger" onClick={() => onDeleteRow(item.DESARROLADOR_ID)}>Eliminar</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    );
}