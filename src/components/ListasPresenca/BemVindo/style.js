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
      padding: 10px;
    }

    td {
      border-top: 1px solid #ccc;
      text-align: center;
    }

    .linha {
      padding: 10px;
      text-align: left;

      p {
        white-space: nowrap;
        width: 100%;
        max-width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button {
        padding: 5px;
        color: #fff;
        border: 0;
        background-color: #34a853;
        border-radius: 4px;
        height: 26px;
      }
    }

    .numero {
      text-align: center;
    }

    .centralizar {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .compareceu {
      color: #828282;
      text-decoration: line-through;

      button {
        background-color: #a7a7a7;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    table {
      border-radius: 0;
      border: 0;
      max-width: 340px;

      .linha p {
        width: 100%;
        max-width: 100px;
        font-size: 14px;
      }
    }
  }
`;
