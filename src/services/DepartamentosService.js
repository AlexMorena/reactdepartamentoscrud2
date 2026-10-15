import axios from "axios";
import Global from "../Global";

export default class DepartamentosService {

    cargarDepartamentos() {
        return new Promise(function (resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    crearDepartamento(departamento) {
        return new Promise(function (resolve){
            let url = Global.urlApiDepartamentos;
            let request = "/api/departamentos";

            axios.post(url + request, departamento).then((response) => {
                resolve(response);
            })
        })
    }

    departamentoId(id){
        return new Promise(function (resolve){
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos/" + id;
            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    eliminarDepartamento(id){
        return new Promise(function (resolve){
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos/" + id

            axios.delete(url + request).then((response) => {
                resolve(response)
            })
        })
    }

    actualizarDepartamento(departamento) {
        return new Promise(function (resolve) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";

            axios.put(url + request, departamento).then((response) => {
                resolve(response);
            })
        })
    }

}