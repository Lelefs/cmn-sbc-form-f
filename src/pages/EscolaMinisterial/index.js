import React from 'react';
import Form from '../../components/Forms/EscolaMinisterial';
import ListaAvisos from '../../components/ListasAvisos/EscolaMinisterial';

import { Container, ImageEscolaMinisterial } from './styles';

export default () => (
  <Container>
    <ImageEscolaMinisterial />
    <ListaAvisos />
    <Form />
  </Container>
);
