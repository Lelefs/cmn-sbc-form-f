import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListaPresencas';
import ComunaKids from '../pages/ComunaKids';
import ListaPresencasComunaKids from '../pages/ListaPresencasComunaKids';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      {/* <Route path="/casados" component={FormCasados} />
      <Route path="/downloadCasados/Leo@1212" component={DownloadFile} /> */}
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} />
      <Route path="/comunaKids" component={ComunaKids} />
      <Route path="/lista/comunaKids" component={ListaPresencasComunaKids} />
      <Route path="*" component={Main} />
    </Switch>
  );
};
