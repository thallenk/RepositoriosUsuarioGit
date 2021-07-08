import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';

export default function Routes() {
    return (
        // O browseRouter é o container principal
        // o siwitch é um container que armazenará as rotas da página 
        <BrowserRouter>      
            <Switch>
                <Route path ='/' exact component = {Home}/>
                <Route path = '/repositories' component = {Repositories}/>
            </Switch>
        </BrowserRouter>

    )

}