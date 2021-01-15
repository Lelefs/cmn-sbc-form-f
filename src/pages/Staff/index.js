import React from 'react';
import Form from '../../components/Forms/Staff';
import ListaAvisos from '../../components/ListasAvisos/Staff';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisos />
    <Form />
  </Container>
);
