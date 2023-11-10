import './App.css';
import { BaseColaboradores } from '../BaseColaboradores.js';
import {Row, Col} from 'react-bootstrap';
import { Listado } from './components/Listado.jsx';
import { useState } from 'react';
import {Formulario} from './components/Formulario.jsx';
import {Alert} from './components/Alert';
import { Buscador } from './components/Buscador.jsx';


function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); // []
  const [alert, setAlert] = useState({
    color: '',
    mensaje: '',
  });

  return (
    <>
    <div className='mx-4'>
      <h1 className='text-start'>Lista de Colaboradores</h1>
      <Row>
        <Col sm={4}>
      <Buscador/>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={9}>
        <Listado colaboradores={colaboradores}/>
        </Col>
        <Col md={3} className=''>
        <h2>Agregar colaborador.</h2>
        <Formulario setAlert={setAlert} setColaboradores= {setColaboradores} colaboradores={colaboradores}></Formulario>
        {alert.mensaje !== "" && <Alert>{alert.mensaje}</Alert>}
        </Col>
      </Row>
    </div>
    </>
  )
}

export default App;
