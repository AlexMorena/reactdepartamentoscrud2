import React, { Component } from 'react'
import DepartamentosService from '../services/DepartamentosService';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    service = new DepartamentosService();

    state = {
        status: false
    }

    actualizarDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        this.service.actualizarDepartamento(departamento).then((result) => {
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
                <form>
                    <label>ID del departamento</label>
                    <input type="number" ref={this.cajaNumero} className="form-control" defaultValue={this.props.numero} disabled />
                    <label>Nombre</label>
                    <input type="text" ref={this.cajaNombre} className="form-control" defaultValue={this.props.nombre} />
                    <label>Localidad</label>
                    <input type="text" ref={this.cajaLocalidad} className="form-control" defaultValue={this.props.localidad} />
                    <br></br>
                    <button onClick={this.actualizarDepartamento} className="btn btn-info">Actualizar</button>
                </form>
            )
        }
    }
}
