import React from 'react';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <h1>Drive-in de dia das crianças</h1>
      <ul>
        <li>Dia 17/10 das 15h às 18h </li>
        <li>Inscrições de 21/09 a 12/10</li>
        <li>
          É permitida a vinda de crianças com seus respectivos responsáveis seja
          de carro ou a pé (para quem virá de transporte público ou outros
          meios), desde que sejam respeitadas as medidas de distanciamento
          social.
        </li>
        <li>
          <b>Horários:</b>
        </li>
        <li>15h-16h crianças de 2 a 6 anos</li>
        <li>16h-18h crianças de 7 a 11 anos</li>
        <li>* Obrigatório</li>
      </ul>
    </Container>
  );
};
