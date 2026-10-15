import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import DepartamentosService from '../services/DepartamentosService';

export default class CreateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    service = new DepartamentosService();

    state = {
        status: false
    }

    insertarDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.crearDepartamento(departamento).then((result) => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>Crear departamento</h1>
                    <form>
                        <label>ID del departamento</label>
                        <input type="number" ref={this.cajaId} className="form-control" />
                        <label>Nombre</label>
                        <input type="text" ref={this.cajaNombre} className="form-control" />
                        <label>Localidad</label>
                        <input type="text" ref={this.cajaLocalidad} className="form-control" />
                        <br></br>
                        <button onClick={this.insertarDepartamento} className="btn btn-info">Crear</button>
                    </form>
                </div>
            )
        }
    }
}
