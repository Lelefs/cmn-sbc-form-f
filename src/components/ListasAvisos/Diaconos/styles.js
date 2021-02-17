import styled from 'styled-components';

export const Container = styled.div`
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

  ul {
    list-style: none;

    li {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 20px;
      margin-bottom: 15px;
    }

    li:last-child {
      margin: 0;
      color: #d93025;
    }
  }
`;
