import styled from 'styled-components';
import img from '../../assets/banner.jpg';

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
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
`;

export const MainContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 650px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #dadce0;
  margin-bottom: 15px;

  h1 {
    font-weight: 300;
    font-size: 1.9rem;
    margin-bottom: 25px;
  }

  p {
    line-height: 22px;
  }

  a {
    margin-left: 5px;
    color: #2671ff;
  }
`;
