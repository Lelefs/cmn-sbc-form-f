import styled from 'styled-components';
import img from '../../assets/banner.jpg';
import imgStaff from '../../assets/banner-staff.jpeg';
import imgKids from '../../assets/banner-drive-in.jpg';
import imgBemVindo from '../../assets/banner-bem-vindo.jpg';
import imgMulheres from '../../assets/mulheres.jpg';
import imgMag from '../../assets/ONE-WAY.jpeg';
import imgMagOneWay from '../../assets/MAG.jpeg';

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

export const ImageDivStaff = styled.div`
  background-image: url(${imgStaff});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
`;

export const ImageDivKids = styled.div`
  background-image: url(${imgKids});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -70px;

  @media only screen and (max-width: 500px) {
    background-position-y: -40px;
  }
`;

export const ImageDivBemVindo = styled.div`
  background-image: url(${imgBemVindo});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -165px;

  @media only screen and (max-width: 500px) {
    background-position-y: -110px;
  }
`;

export const ImageDivMulheres = styled.div`
  background-image: url(${imgMulheres});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -70px;

  @media only screen and (max-width: 500px) {
    background-position-y: -40px;
  }
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


export const ImageDivMAG = styled.div`
  background-image: url(${imgMag});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -70px;

  @media only screen and (max-width: 500px) {
    background-position-y: -40px;
  }
`;


export const ImageDivMAGOneWay = styled.div`
  background-image: url(${imgMagOneWay});
  border-radius: 8px;
  max-height: 22.390243902439025vw;
  max-width: 90vw;
  height: 159.21951219512195px;
  width: 650px;
  background-size: cover;
  margin-bottom: 15px;
  background-position-y: -70px;

  @media only screen and (max-width: 500px) {
    background-position-y: -40px;
  }
`;
