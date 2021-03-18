import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  margin-bottom: 25px;
`;

export const LabelInput = styled.label`
  letter-spacing: 0.1px;
  line-height: 24px;
  font-weight: 300;
  font-size: 1rem;

  span {
    color: var(--erro);
  }
`;

export const ContainerInput = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid var(--preto);
  color: var(--preto);
  margin-top: 10px;

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--erro);
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--verde);
      color: var(--verde);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--verde);
    `}

  ${props =>
    props.readOnly &&
    css`
      color: var(--preto);
      border-color: var(--preto);
      opacity: 0.5;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: var(--preto);
    }
  }

  svg {
    margin-right: 15px;
  }

  input + svg {
    cursor: pointer;
    margin-right: 0;
    margin-left: 15px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  span {
    background: var(--erro);
    color: var(--branco);

    &::before {
      border-color: var(--erro) transparent;
    }
  }
`;
