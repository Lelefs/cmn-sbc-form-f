import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiHome, FiUser, FiPhone } from 'react-icons/fi';
import api from '../../../services/api';

import { Container, DivLabelInput, DivInput, Button } from './styles';

export default () => {
  const history = useHistory();

  const [loader, setLoader] = useState(false);

  const [celula, setCelula] = useState('');
  const [celulaIsFocused, setCelulaIsFocused] = useState(false);
  const [celulaIsErrored, setCelulaIsErrored] = useState(false);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celular, setCelular] = useState('');
  const [celularIsFocused, setCelularIsFocused] = useState(false);

  const handledCelulaFocus = useCallback(() => {
    setCelulaIsFocused(true);
  }, []);

  const handledCelulaBlur = useCallback(() => {
    setCelulaIsFocused(false);
    setCelulaIsErrored(false);
  }, []);

  const handledNomeFocus = useCallback(() => {
    setNomeIsFocused(true);
  }, []);

  const handledNomeBlur = useCallback(() => {
    setNomeIsFocused(false);
  }, []);

  const handledCelularFocus = useCallback(() => {
    setCelularIsFocused(true);
  }, []);

  const handledCelularBlur = useCallback(() => {
    if (celular.length > 11) {
      const novoCelular = celular.slice(0, 11);
      setCelular(novoCelular);
    }

    setCelularIsFocused(false);
  }, [celular]);

  const handleSubmitForm = event => {
    event.preventDefault();

    setLoader(true);
    api
      .post('/mag', {
        nome,
        celula,
        telefone: celular,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'mag' });
      })
      .catch(e => {
        alert(e.response.data);
        setLoader(false);
      });
  };

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="celulaInput">
          Célula <span>*</span>{' '}
        </label>
        <DivInput
          isFilled={!!celula}
          isFocused={celulaIsFocused}
          isErrored={celulaIsErrored}
        >
          <FiHome size={20} />
          <input
            type="text"
            id="celulaInput"
            placeholder="Sua célula"
            value={celula}
            onChange={e => setCelula(e.target.value)}
            onFocus={handledCelulaFocus}
            onBlur={handledCelulaBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="nomeCompletoInput">
          Nome completo <span>*</span>{' '}
        </label>
        <DivInput isFilled={!!nome} isFocused={nomeIsFocused}>
          <FiUser size={20} />
          <input
            type="text"
            id="nomeCompletoInput"
            placeholder="Seu nome completo"
            value={nome}
            onChange={e => setNome(e.target.value)}
            onFocus={handledNomeFocus}
            onBlur={handledNomeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="celularInput">
          Celular <span>*</span>{' '}
        </label>
        <DivInput isFilled={!!celular} isFocused={celularIsFocused}>
          <FiPhone size={20} />
          <input
            type="number"
            id="celularInput"
            placeholder="Seu celular"
            max={99999999999}
            value={celular}
            onChange={e => setCelular(e.target.value)}
            onFocus={handledCelularFocus}
            onBlur={handledCelularBlur}
          />
        </DivInput>
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={
          celula === '' || nome === '' || celular === '' || celular.length < 8
        }
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
