import React from 'react';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <h1>MAG ONE WAY - Presencial</h1>
      <ul>
        <li>
          Atendendo às normas de segurança em nossa cidade,  <br />
          será necessário agendar a sua presença em nosso culto deste sábado 24/04 às 15h, 
          limitando à quantidade permitida por lei.
        </li>
        <li>
          Em caso de dúvidas, entre em contato pelo nosso WhatsApp
          (11)94146-6059.
        </li>
        <li>
          Limite de 200 inscritos. Staff, e ministério de louvor não precisam fazer a inscrição.
        </li>
        <li>
          Venha de máscara e siga as orientações das diáconisas e cooperadoras
          para distanciamento e higienização.
        </li>
        <li>*Obrigatório</li>
      </ul>
    </Container>
  );
};
