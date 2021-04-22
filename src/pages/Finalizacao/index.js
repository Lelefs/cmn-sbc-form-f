import React from 'react';
import {
  Container,
  ImageDiv,
  MainContainer,
  ImageDivStaff,
  ImageDivKids,
  ImageDivBemVindo,
  ImageDivMulheres,
  ImageDivMAG,
  ImageDivMAGOneWay
} from './styles';

import { ImageEscolaMinisterial } from '../EscolaMinisterial/styles';

const origens = {
  comunaKids: {
    titulo: 'Drive-in de dia das crianças',
    div: <ImageDivKids />,
  },
  bemVindo: {
    titulo: 'Encontro Vida Vitoriosa',
    div: <ImageDivBemVindo />,
  },
  staff: {
    titulo: 'Treinamento Staff',
    div: <ImageDivStaff />,
  },
  cultoPresencial: {
    titulo: 'Culto presencial Comunidade da Graça SBC',
    div: <ImageDiv />,
  },
  mulheres: {
    titulo: 'Encontro de Mulheres Intercessoras',
    div: <ImageDivMulheres />,
  },
  escolaMinisterial: {
    titulo: 'Escola ministerial projeto IDE',
    div: <ImageEscolaMinisterial />,
  },
  mag: {
    titulo: 'MAG SBC Presencial',
    div: <ImageDivMAG />
  },
  magOneWay: {
    titulo: 'MAG One Way',
    div: <ImageDivMAGOneWay />
  }
};

export default props => {
  const { origem } = props.location.state;

  return (
    <Container>
      {origens[origem].div}

      <MainContainer>
        <h1>{origens[origem].titulo}</h1>

        <p>
          Agradecemos a sua inscrição. Em caso de dúvidas, entre em contato com
          o nosso Whatsapp
          <a href="https://wa.me/5511932621680">(11) 93262-1680</a>
        </p>
      </MainContainer>
    </Container>
  );
};
