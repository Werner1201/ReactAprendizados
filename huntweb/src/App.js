import React, { Component } from "react";
import Cabecalho from "./components/cabecalho";
import "./estilos.css";
import Routes from './routes';

//Um componente possui a parte visual (HTML, Css),  e a parte de declarar variaveis 
const App = () => (
    <div className="App">
    <Cabecalho/>
    <Routes/>
    </div>
);


export default App;
