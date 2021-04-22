import styled from 'styled-components';
import img from '../../assets/ONE-WAY.jpeg';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageDiv = styled.div`
  background-image: url(${img});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 88vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -05px;

  @media only screen and (max-width: 500px) {
    background-position-y: -40px;
  }
`;
