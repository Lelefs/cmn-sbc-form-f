import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import FormCasados from '../pages/CursoCasados';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListaPresencas';
import DownloadFile from '../pages/DownloadFile';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/casados" component={FormCasados} />
      <Route path="/downloadCasados/Leo@1212" component={DownloadFile} />
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} />
    </Switch>
  );
};
