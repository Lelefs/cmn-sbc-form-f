import React from 'react';

import ListaPresenca from '../../components/ListaPresenca';

import { Container } from './styles';

export default () => {
  const horarioCulto = window.location.href.split('/lista/')[1];
  return (
    <Container>
      <ListaPresenca horarioCulto={horarioCulto} />
    </Container>
  );
};
