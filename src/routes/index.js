import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import Diaconos from '../pages/Diaconos';
import DownloadFile from '../pages/DownloadFile';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListasPresenca/Cultos';
import Main from '../pages/Main';
import Staff from '../pages/Staff';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/diaconos" component={Diaconos} />
      <Route path="/downloadStaff/Leo@1212" component={DownloadFile} />
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/staff" component={Staff} />
      {/* <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} /> */}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
