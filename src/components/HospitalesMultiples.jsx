import React, { Component } from 'react'
import ServicesHospitales from '../services/ServicesHospitales'
import TrabajadoresComponent from './TrabajadoresComponent';

export default class HospitalesMultiples extends Component {
    service = new ServicesHospitales();
    selectHospital = React.createRef();

    state = {
        hospitales: [],
        hospitalesSeleccionados: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales();
        this.setState({
            hospitales: datos
        })
    }

    componentDidMount = async () => {
        await this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;
        for (let option of options) {
            if (option.selected) {
                aux.push(option.value);
            }
        }
        console.log(aux);
        this.setState({
            hospitalesSeleccionados: aux
        })
    }

    render() {
        return (
            <div>
                <h1>HospitalesMultiples</h1>
                <form>
                    <label>Seleccione hospital</label>
                    <select ref={this.selectHospital} className='form-control'
                        size="6" multiple>
                        {
                            this.state.hospitales.map((hosp, index) => {
                                return (
                                    <option key={index} value={hosp.idHospital}>{hosp.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.getHospitalesSeleccionados} className='btn btn-info'>
                        Mostrar Trabajadores
                    </button>
                </form>
                {
                    this.state.hospitalesSeleccionados.length != 0 &&
                    (<TrabajadoresComponent idHospitales={this.state.hospitalesSeleccionados} />)
                }
            </div>
        )
    }
}
