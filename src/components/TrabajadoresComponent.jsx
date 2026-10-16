import React, { Component } from 'react'
import ServicesHospitales from '../services/ServicesHospitales'

export default class TrabajadoresComponent extends Component {
    service = new ServicesHospitales();

    state = {
        trabajadores: []
    }

    loadTrabajadores = async () => {
        //Recuperamos el array de int de los hospitales
        let idHospitales = this.props.idHospitales
        let data = "";
        for(let id of idHospitales){
            data += "idhospital=" + id + "&";
        }
        data = data.substring(0, data.length - 1);
        //recuperamos los datos de los trabajadores
        let datos = await this.service.getTrabajadoresHospitales(data);
        this.setState({
            trabajadores: datos
        })
    }

    componentDidMount = async () => {
        await this.loadTrabajadores();
    }

    componentDidUpdate = async (oldProps) => {
        if(oldProps.idHospitales != this.props.idHospitales){
            await this.loadTrabajadores();
        }
    }

  render() {
    return (
      <div>
        <h1>Trabajadores Component</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((trab, index) => {
                        return (
                            <tr key={index}>
                                <td>{trab.apellido}</td>
                                <td>{trab.oficio}</td>
                                <td>{trab.salario}</td>
                                <td>{trab.idHospital}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
