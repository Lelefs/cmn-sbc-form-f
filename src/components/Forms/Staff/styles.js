import styled, { css } from 'styled-components';

export const Container = styled.form`
  padding: 20px;
  width: 100%;
  max-width: 650px;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #dadce0;

  h1 {
    font-weight: 300;
    font-size: 1.9rem;
    margin-bottom: 25px;
  }

  & + & {
    margin-top: 15px;
  }
`;

export const DivLabelInput = styled.div`
  margin-bottom: 25px;

  label {
    letter-spacing: 0.1px;
    line-height: 24px;
    font-weight: 300;

    span {
      color: #d93025;
    }
  }

  @media only screen and (max-width: 500px) {
    label {
      font-size: 14px;
    }
  }
`;

export const DivInput = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #666360;
  color: #666360;
  margin: 10px 0;

  ${props =>
    props.isFocused &&
    css`
      border-color: #34a853;
      color: #34a853;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #34a853;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${props =>
    props.readOnly &&
    css`
      color: #666360;
      border-color: #666360;
      opacity: 0.5;
    `}

  svg {
    margin-right: 16px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DivCheckbox = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid #666360;
    color: #fff;
    border-radius: 50%;
    margin-right: 15px;
    transition: all 0.2s;

    &:hover {
      filter: brightness(90%);
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    }

    &:checked {
      border: 1px solid #34a853;
    }

    &:checked:after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      border: 0;
      background: #34a853;
      border-radius: 50%;
      transform: translate(3px, 2.6px);
    }

    &:focus {
      outline: none !important;
    }
  }

  input[type='checkbox'] {
    border-radius: 2px;
  }

  input[type='checkbox']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 2px;
    transform: translate(1.5px, 1.5px);
  }
`;

export const Button = styled.button`
  padding: 0 24px;
  line-height: 36px;
  color: #fff;
  border: 0;
  background-color: #34a853;
  border-radius: 8px;
`;
