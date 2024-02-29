import { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import AddDesarrollador from './components/forms/Desarrolladores/Add';
import TableDesarrolladores from './components/Table/TableDesarrolladores';

import './App.css';
import { getDesarrolladores } from './api/Desarrolladores';
import { ToastContainer } from 'react-toastify';
import Controls from './components/Controls/Controls';

function App() {

  const [refreshTable, setRefreshTable] = useState(0);
  const [typeControl, setTypeControl] = useState("Add");
  const [id_edit, setId_edit] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getDesarrolladores().then(response => {
      setData(response.data.response);
    });
  }, [refreshTable]);

  return (
    <>
      <Container fluid className='my-5'>
        <Row className="justify-content-md-center">
          <Col xs lg md="4">
            <h2>Datos</h2>
            <Controls type={typeControl} setRefreshTable={setRefreshTable} id_edit={id_edit} setTypeControl={setTypeControl} />
          </Col>
          <Col xs lg md="8">
            <TableDesarrolladores data={data} setRefreshTable={setRefreshTable} setTypeControl={setTypeControl} setId_edit={setId_edit}/>
          </Col>
        </Row>
      </Container>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover />
    </>
  )
}

export default App
