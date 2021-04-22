import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import Diaconos from '../pages/Diaconos';
import DownloadFile from '../pages/DownloadFile';
import Finalizacao from '../pages/Finalizacao';
import ListaPresencas from '../pages/ListasPresenca/Cultos';
import ListaPresencasEscolaMinisterial from '../pages/ListasPresenca/EscolaMinisterial';
import ListaPresencasMulheres from '../components/ListasPresenca/Mulheres';
import Main from '../pages/Main';
import Staff from '../pages/Staff';
import Mulheres from '../pages/Mulheres';
import EscolaMinisterial from '../pages/EscolaMinisterial';
import Mag from '../pages/Mag';
import MagOneWay from '../pages/MagOneWay';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/diaconos" component={Diaconos} />
      <Route path="/downloadStaff/Leo@1212" component={DownloadFile} />
      <Route path="/finalizacao" component={Finalizacao} />
      <Route path="/staff" component={Staff} />
      <Route path="/mulheres" component={Mulheres} />
      <Route path="/escolaMinisterial" component={EscolaMinisterial} />
      <Route path="/mag" component={Mag} />
      <Route path="/magOneWay" component={MagOneWay} />

      <Route path="/lista/mulheres" component={ListaPresencasMulheres} />
      <Route
        path="/lista/escolaministerial"
        component={ListaPresencasEscolaMinisterial}
      />
      <Route path="/lista/manha" component={ListaPresencas} />
      <Route path="/lista/noite" component={ListaPresencas} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
