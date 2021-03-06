import React from 'react';
import Form from '../../components/Forms/EscolaMinisterial';
import ListaAvisos from '../../components/ListasAvisos/EscolaMinisterial';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisos />
    <Form />
  </Container>
);
