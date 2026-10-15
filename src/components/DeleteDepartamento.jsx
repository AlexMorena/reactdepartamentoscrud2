import React, { Component } from 'react';
import DepartamentosService from '../services/DepartamentosService';
import { Navigate, NavLink } from 'react-router-dom';

export default class DeleteDepartamento extends Component {

    service = new DepartamentosService();

    state = {
        status: false,
        departamento: null
    }

    componentDidMount = () => {
        console.log(this.props.numero);
        this.service.departamentoId(this.props.numero).then((result) => {
            this.setState({
                departamento: result
            })
        })
    }

    eliminarDepartamento = () => {
        this.service.eliminarDepartamento(this.props.numero).then((result) => {
            console.log ("cambiandoa  true");
            this.setState({
                status: true
            })
        })
    }

    render() {
        if(this.state.status === true){
            return (<Navigate to="/" />)
        }
        console.log(this.state.departamento)
        if (this.state.departamento != null) {
            return (<div>
                <h1>Eliminar Departamento</h1>
                <h2>Está completamente seguro de que quieres eliminar el departamento {this.state.departamento.nombre} situado
                    en {this.state.departamento.localidad}?</h2>
                    <NavLink className="btn btn-warning" to="/">Cancelar</NavLink>
                    <br></br>
                    <button className='btn btn-danger' onClick={this.eliminarDepartamento}>Confirmar</button>

            </div>)
        } else {
            return (
                <h3>Cargando datos</h3>
            )
        }
    }
}
