import React from 'react';

import { Container } from './styles';

export default () => {
  return (
    <Container>
      <h1>Culto presencial Comunidade da Graça SBC</h1>
      <ul>
        <li>
          Os nossos cultos presenciais estão temporariamente suspensos por
          decreto do estado de São Paulo a respeito do covid.
        </li>
        <li>
          Enquanto isso todos podem nos acompanhar online em nosso canal do
          YouTube.
        </li>
        <li />
        {/* <li>
          Atendendo às normas de segurança em nossa cidade, será necessário
          agendar a sua presença em um dos cultos deste domingo&nbsp;
          {process.env.REACT_APP_DIA}/12, limitando à quantidade permitida por
          lei.
        </li>
        <li>
          Em caso de dúvidas, entre em contato pelo nosso WhatsApp (11)
          93262-1680.
        </li>
        <li>
          Os cultos serão realizados de portas fechadas e as portas fecharão
          pontualmente às 09h30 e 18h, respectivamente. Ambos os cultos serão
          transmitidos ao vivo em nosso canal do Youtube (Comunidade da Graça
          SBC).
        </li>
        <li>
          Não haverá atividade do Ministério infantil, por este motivo,
          recomendamos a participação presencial para crianças acima de 11 anos.
        </li>
        <li>
          Limite de 200 inscritos por culto. Staff, e ministério de louvor não
          precisam fazer a inscrição.
        </li>
        <li>
          Selecione apenas um horário de culto para dar a oportunidade a outros
          irmãos, pois as vagas são limitadas.
        </li>
        <li>
          Venha de máscara e siga as orientações dos diáconos e cooperadores
          para distanciamento e higienização.
        </li>
        <li>
          Crianças e idosos, de acordo com o decreto, não podem participar. (De
          acordo com o decreto municipal 211.18)
        </li>
        <li>*Obrigatório</li> */}
      </ul>
    </Container>
  );
};
