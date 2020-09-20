import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .divLoader {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000042;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0;
  }
`;
