import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    //um State eh um objeto usado para armazenar as variaveis a seres utilizadas para fornecer dados a serem exibidos
    state = {
        products: [],

    }

    //Usado para executar uma acao logo que o componente eh exibido em tela
    componentDidMount(){
        this.carregaProdutos();
    }
    //Utilizando Arrow Functions pois ele enxerga o escopo da classe e nao sobreescreve o / this. / 
    //Funcao Asincrona para mostrar as informacoes sem recarregar a página
    carregaProdutos = async() => {
        //await espera a funcao pegar e mostra sem sincronismo com o carregar da página
        //No caso pega os products da Base Url escrita no ./services/api.js
        const resposta = await api.get('/products');

        //Para preencher um atributo de estado utiliza-se a funcao auxiliar .setState(objeto{atributos que queres alterar})
        this.setState({products: resposta.data.docs})
    };

    render(){
       return (
        <div className="lista-produtos">
            {this.state.products.map(product => (
                <h2 key={product._id}>{product.title}</h2>
            ))}
        </div>
       )
    }
}