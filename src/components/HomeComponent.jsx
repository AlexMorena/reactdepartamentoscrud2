import React, { Component } from 'react';
import DepartamentosService from '../services/DepartamentosService';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {

    service = new DepartamentosService();

    state = {
        departamentos: []
    }

    cargarDepartamentos = () => {
        this.service.cargarDepartamentos().then((result) => {
            this.setState({
                departamentos: result
            })
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }
    render() {
        return (
            <div>
                <h1>HomeComponent</h1>
                <table className="table table-hover table-striped align-middle mb-0">
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dep, index) => {
                                return (<tr key={index}>
                                    <th>{dep.numero}</th>
                                    <th>{dep.nombre}</th>
                                    <th>{dep.localidad}</th>
                                    <NavLink className="btn btn-warning" to={"/update/" +  dep.numero + 
                                        "/" + dep.nombre +
                                        "/" + dep.localidad
                                    }>
                                        Editar
                                    </NavLink>
                                    <br></br>
                                    <NavLink className="btn btn-danger" to={/delete/ + dep.numero}>
                                        Eliminar
                                    </NavLink>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
