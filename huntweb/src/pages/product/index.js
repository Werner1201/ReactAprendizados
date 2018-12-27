import React, { Component } from 'react';
import api from '../../services/api';
import './estilo.css';

export default class Product extends Component {
    state = {
        product: {

        }
    };

    async componentDidMount(){
        //pega o id enviado pela Url 
        const {id} = this.props.match.params;

        const resposta = await api.get(`/products/${id}`);
        //Guarda no State Product
        this.setState({product:resposta.data});
    }

    render(){
        const {product} = this.state;

        return(
            <div className="DetalProduto">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
            <a href="/" className="volta">Voltar</a>
            </div>
            
        )
    }
}