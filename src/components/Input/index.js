import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TiSortNumerically } from 'react-icons/ti';
import { useField } from '@unform/core';

import { Container, ContainerInput, Error, LabelInput } from './styles';

const icons = {
  default: <FiAlertCircle size={20} />,
  email: <FiMail size={20} />,
  nome: <FiUser size={20} />,
  celula: <HiOutlineUserGroup size={20} />,
  idade: <TiSortNumerically size={20} />,
  tempoComunidade: <TiSortNumerically size={20} />,
  telefone: <FiPhone size={20} />,
};

export default function Input({ Icon, label, name, type = 'text', ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handledInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handledInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <LabelInput isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
        {label} <span>*</span>
      </LabelInput>

      <ContainerInput
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
      >
        {error ? (
          <Error title={error}>
            <FiAlertCircle color="#c53030" size={20} />
          </Error>
        ) : (
          icons[Icon]
        )}
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          onFocus={handledInputFocus}
          onBlur={handledInputBlur}
          type={type}
          {...rest}
        />
      </ContainerInput>
    </Container>
  );
}
