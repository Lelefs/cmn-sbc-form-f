import React from 'react';
import Form from '../../components/Forms/Mag';
import ListaAvisosMag from '../../components/ListasAvisos/Mag';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisosMag />
    <Form />
  </Container>
);