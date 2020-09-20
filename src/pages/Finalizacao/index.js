import React from 'react';
import { Container, ImageDiv, MainContainer, ImageDivCasados } from './styles';

export default props => {
  const { origem } = props.location.state;

  return (
    <Container>
      {origem === 'comunaKids' ? <ImageDivCasados /> : <ImageDiv />}

      <MainContainer>
        {origem === 'comunaKids' ? (
          <h1>Drive-in de dia das crianças</h1>
        ) : (
          <h1>Culto presencial Comunidade da Graça SBC</h1>
        )}

        <p>
          Agradecemos a sua inscrição. Em caso de dúvidas, entre em contato com
          o nosso Whatsapp
          <a href="https://wa.me/5511932621680">(11) 93262-1680</a>
        </p>
      </MainContainer>
    </Container>
  );
};
