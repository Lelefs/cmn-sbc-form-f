import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 100%;

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

  div {
    padding: 20px 10px;
    text-align: left;
    width: 100%;

    h3 + h3 {
      margin-top: 5px;
    }
  }

  table {
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #dadce0;
    border-collapse: collapse;

    th {
      padding: 0.625rem;
    }

    td {
      border-top: 1px solid #ccc;
      text-align: center;
      padding: 0.625rem;
    }

    .compareceu {
      color: #828282;
      text-decoration: line-through;

      button {
        background-color: #a7a7a7;
      }
    }
  }
`;
