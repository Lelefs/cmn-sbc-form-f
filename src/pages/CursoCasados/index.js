import React from 'react';
import FormCasados from '../../components/FormCasados';
import ListaAvisosCasados from '../../components/ListaAvisosCasados';

import { Container, ImageDiv } from './styles';

export default () => (
  <Container>
    <ImageDiv />
    <ListaAvisosCasados />
    <FormCasados />
  </Container>
);
