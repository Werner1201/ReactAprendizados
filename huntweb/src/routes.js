import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/main";
import Product from "./pages/product";


    //BrowserRouter Define por onde sera acessado, por um Browser
    /*Switch Define quantas paginas podem ser exibidas a cada Rota*/
    /*Route Define que quando na raiz so Site ira mostrar o component Main */
    //Usado Exact diz para o route que so vai entrar no / caso seja exatamente igual no browser
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/product/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;