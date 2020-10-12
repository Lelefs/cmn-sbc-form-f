import React from 'react';
import Form from '../../components/Forms/BemVindo';
import ListaAvisos from '../../components/ListasAvisos/BemVindo';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisos />
    <Form />
  </Container>
);
