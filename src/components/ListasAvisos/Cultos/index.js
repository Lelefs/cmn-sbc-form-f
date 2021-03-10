import React from 'react';

import { Container } from './styles';

export default () => {
  const diaCulto = String(process.env.REACT_APP_DIA).padStart(2, '0').split('');

  return (
    <Container>
      <h1>Culto presencial Comunidade da Graça SBC</h1>
      <ul>
        <li>
          Atendendo às normas de segurança em nossa cidade, será necessário
          agendar a sua presença em um dos cultos deste domingo&nbsp;
          {diaCulto}/03, limitando à quantidade permitida por lei.
        </li>
        <li>
          Em caso de dúvidas, entre em contato pelo nosso WhatsApp (11)
          93262-1680.
        </li>
        <li>
          Ambos os cultos serão transmitidos ao vivo em nosso canal do Youtube
          (Comunidade da Graça SBC).
        </li>
        <li>
          Limite de 230 inscritos por culto. Staff, e ministério de louvor não
          precisam fazer a inscrição.
        </li>
        <li>
          As atividades do Ministério infantil continuam conforme programado,
          sendo crianças de 02 a 06 anos pela manhã e crianças de 07 a 11 anos
          pela noite.
        </li>
        <li>
          Venha de máscara e siga as orientações dos diáconos e cooperadores
          para distanciamento e higienização.
        </li>
        <li>*Obrigatório</li>
      </ul>
    </Container>
  );
};
