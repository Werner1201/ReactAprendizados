import React, { Component } from 'react';
import api from '../../services/api';
import './estilo.css';

export default class Product extends Component {
    
    render(){
        return(
            <div id="detalhesProduct">
            <h1>Product</h1>
            <a href="/">Voltar</a>
            </div>
        )
    }
}