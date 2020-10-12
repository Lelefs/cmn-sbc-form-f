import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListasPresenca/Cultos';
import ComunaKids from '../pages/ComunaKids';
import BemVindo from '../pages/BemVindo';
import ListaPresencasComunaKids from '../pages/ListasPresenca/ComunaKids';
import ListaPresencasBemVindo from '../pages/ListasPresenca/BemVindo';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} />
      <Route path="/comunaKids" component={ComunaKids} />
      <Route path="/encontroVidaVitoriosa" component={BemVindo} />
      <Route path="/lista/comunaKids" component={ListaPresencasComunaKids} />
      <Route
        path="/lista/encontroVidaVitoriosa"
        component={ListaPresencasBemVindo}
      />
      <Route path="*" component={Main} />
    </Switch>
  );
};
