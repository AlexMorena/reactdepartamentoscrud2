import { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import CreateDepartamento from "./CreateDepartamento";
import UpdateDepartamento from "./UpdateDepartamento";
import DeleteDepartamento from "./DeleteDepartamento";

export default class Router extends Component {
    render() {
        function UpdateElement() {
            let { numero, nombre, localidad } = useParams();
            return (<UpdateDepartamento numero={numero} nombre={nombre} localidad={localidad}/>)
        }

        function DeleteElement() {
            let { numero } = useParams();
            return (<DeleteDepartamento numero={numero}/>)
        }
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/creardepartamento" element={<CreateDepartamento />} />
                    <Route path="/update/:numero/:nombre/:localidad" element={<UpdateElement />} />
                    <Route path="/delete/:numero" element={<DeleteElement />} />
                    {/* <Route path="/oficio/:oficio" element={<OficioElement />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
