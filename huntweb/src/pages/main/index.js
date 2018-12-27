import React, { Component } from 'react';
import api from '../../services/api';
import './estilo.css';
import {Link} from 'react-router-dom';

export default class Main extends Component {
    //um State eh um objeto usado para armazenar as variaveis a seres utilizadas para fornecer dados a serem exibidos
    state = {
        products: [],
        produtsListInfo: {},
        pag: 1,
    }
    //Usado para executar uma acao logo que o componente eh exibido em tela
    componentDidMount(){
        this.carregaProdutos();
    }
    //Utilizando Arrow Functions pois ele enxerga o escopo da classe e nao sobreescreve o / this. / 
    //Funcao Asincrona para mostrar as informacoes sem recarregar a página
    carregaProdutos = async(page = 1) => {
        //await espera a funcao pegar e mostra sem sincronismo com o carregar da página
        //No caso pega os products da Base Url escrita no ./services/api.js
        const resposta = await api.get(`/products?page=${page}`);

        //Armazenar o docs numa variavel e todo o resto em outra
        const { docs, ...produtsListInfo} = resposta.data;

        //Para preencher um atributo de estado utiliza-se a funcao auxiliar .setState(objeto{atributos que queres alterar})
        this.setState({products: docs, produtsListInfo});
    };

    proxPag = () => {
        const { pag, produtsListInfo } = this.state;

        if(pag === produtsListInfo.pages) return;
        console.log(produtsListInfo.pages);
        const pageNumber = pag + 1;
        this.setState({pag: pag + 1});
        this.carregaProdutos(pageNumber);
    };
    antPag = () => {
        const { pag, produtsListInfo } = this.state;

        if(pag === 1) return;
        const pageNumber = pag - 1;
        this.setState({pag: pag - 1});
        this.carregaProdutos(pageNumber);
    }


    render(){
        const {products, pag, produtsListInfo:{pages}} = this.state;
        return (
        <div className="lista-produtos">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>

                    <Link to={`/product/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="acoes">
                <button disabled={pag === 1} onClick={this.antPag}>Anterior</button>
                <button disabled={pag === pages} onClick={this.proxPag}>Próxima</button>
            </div>
        </div>
        
       )
    }
}