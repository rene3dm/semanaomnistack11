import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon'; // por padrao ele ja procura o arquivo index.js
import Register from './pages/Register'; 
import Profile from './pages/Profile'; 
import NewIncident from './pages/NewIncident'; 

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                {/* o path="/" siguinifica q será a primeira rota que mostrada   exact = força que o caminho seja exatamente esse*/}
                <Route path="/register" component={Register} /> 
                <Route path="/profile" component={Profile} /> 
                <Route path="/incidents/new" component={NewIncident} /> 
            </Switch>
        </BrowserRouter>
    );
}