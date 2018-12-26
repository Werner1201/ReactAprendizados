import React, { Component } from "react";
import Cabecalho from "./components/cabecalho";
import Main from "./pages/main";
import "./estilos.css";

//Um componente possui a parte visual (HTML, Css),  e a parte de declarar variaveis 
const App = () => (
    <div className="App">
    <Cabecalho/>
    <Main/> 
    </div>
);


export default App;
