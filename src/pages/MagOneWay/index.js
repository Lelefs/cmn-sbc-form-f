import React from 'react';
import Form from '../../components/Forms/MagOneWay';
import ListaAvisosMagOneWay from '../../components/ListasAvisos/MagOneWay';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisosMagOneWay />
    <Form />
  </Container>
);
