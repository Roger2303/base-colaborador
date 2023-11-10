import { Form } from 'react-bootstrap';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

export const Formulario = ({setAlert, setColaboradores, colaboradores}) => {
const [formulario, setFormulario] = useState({nombre: '', correo: '', edad: '', cargo:'', telefono:''})
const onchange = (valor) => {
setFormulario({...formulario, [valor.target.name]: valor.target.value})
}

console.log(formulario)

const onsubmit = (e) => {
e.preventDefault();

if
(formulario.nombre == '' ||  
formulario.correo == '' || 
formulario.edad == '' || 
formulario.cargo == '' ||
formulario.telefono == '') 
{setAlert({
  color:'danger',
  mensaje:'Debes llenar todos los campos'
});

return;
} else {
  setAlert({
    mensaje: '¡Gracias por colaborar!'
  });
};


const newColaborador = {...formulario, id: 'asd'}
setColaboradores([...colaboradores,formulario])
};


return(
    <Form onSubmit={onsubmit}>
        <Form.Group className="mb-3">
        <Form.Control name='nombre' type="text" placeholder="Nombre" onChange= {onchange} value={formulario.nombre}/>
        <Form.Control name='correo' type="email" placeholder="Enter email" onChange= {onchange} value={formulario.correo}/>
        <Form.Control name='edad' type="number" placeholder="Edad" onChange= {onchange} value={formulario.edad}/>
        <Form.Control name='cargo' type="text" placeholder="Cargo" onChange= {onchange}value={formulario.cargo}/>
        <Form.Control name='telefono' type="text" placeholder="Teléfono" onChange= {onchange} value={formulario.telefono}/>
        <Button variant='primary' type='submit' className='w-100'> Agregar Colaborador</Button>
      </Form.Group>
    </Form>
)
};