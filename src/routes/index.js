import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListasPresenca/Cultos';
import BemVindo from '../pages/BemVindo';
import ListaPresencasBemVindo from '../pages/ListasPresenca/BemVindo';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} />
      <Route path="/encontroVidaVitoriosa" component={BemVindo} />
      <Route
        path="/lista/encontroVidaVitoriosa"
        component={ListaPresencasBemVindo}
      />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
