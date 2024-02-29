import AddDesarrollador from "../forms/Desarrolladores/Add";
import EditDesarrollador from "../forms/Desarrolladores/edit";

export default function Controls({ type, setRefreshTable , id_edit, setTypeControl}) {

    switch (type) {
        case "Add":
            return (<AddDesarrollador setRefreshTable = {setRefreshTable}/>) ;
        case "Edit":
            return (<EditDesarrollador setRefreshTable = {setRefreshTable} id_edit={id_edit} setTypeControl={setTypeControl}/>) ;
        default:
            return (<AddDesarrollador setRefreshTable = {setRefreshTable}/>) ;
    }
}