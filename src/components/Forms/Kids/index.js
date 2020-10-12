import React, { useState, useCallback } from 'react';
import { isAfter } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BiFace } from 'react-icons/bi';
import { TiSortNumerically } from 'react-icons/ti';
import api from '../../../services/api';

import { Container, DivLabelInput, DivInput, Button } from './styles';

export default () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const dataFinal = new Date(2020, 9, 12);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [idade, setIdade] = useState('');
  const [idadeIsFocused, setIdadeIsFocused] = useState(false);

  const [responsavel, setResponsavel] = useState('');
  const [responsavelIsFocused, setResponsavelIsFocused] = useState(false);

  const handledNomeFocus = useCallback(() => {
    setNomeIsFocused(true);
  }, []);

  const handledNomeBlur = useCallback(() => {
    setNomeIsFocused(false);
  }, []);

  const handledIdadeFocus = useCallback(() => {
    setIdadeIsFocused(true);
  }, []);

  const handledIdadeBlur = useCallback(() => {
    setIdadeIsFocused(false);
  }, []);

  const handledResponsavelFocus = useCallback(() => {
    setResponsavelIsFocused(true);
  }, []);

  const handledResponsavelBlur = useCallback(() => {
    setResponsavelIsFocused(false);
  }, []);

  const handleSubmitForm = async event => {
    event.preventDefault();
    const hoje = new Date();

    if (isAfter(hoje, dataFinal)) {
      return alert(
        'Não foi possível completar sua inscrição. Já expirou o prazo.',
      );
    }

    setLoader(true);

    api
      .post('/comunaKids', {
        nome,
        idade,
        responsavel,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'comunaKids' });
      })
      .catch(e => {
        alert(e.response.data);
        setLoader(false);
      });
  };

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="nomeInput">
          Nome da criança
          <span>*</span>
        </label>
        <DivInput isFilled={!!nome} isFocused={nomeIsFocused}>
          <BiFace size={20} />
          <input
            type="text"
            id="nomeInput"
            placeholder="Nome da criança"
            value={nome}
            onChange={e => setNome(e.target.value)}
            onFocus={handledNomeFocus}
            onBlur={handledNomeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="idadeInput">
          Idade da criança
          <span>*</span>
        </label>
        <DivInput isFilled={!!idade} isFocused={idadeIsFocused}>
          <TiSortNumerically size={20} />
          <input
            type="number"
            id="idadeInput"
            placeholder="Idade da criança"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            onFocus={handledIdadeFocus}
            onBlur={handledIdadeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="responsavelInput">
          Responsável
          <span>*</span>
        </label>
        <DivInput isFilled={!!responsavel} isFocused={responsavelIsFocused}>
          <FiUser size={20} />
          <input
            type="text"
            id="responsavelInput"
            placeholder="Responsável"
            value={responsavel}
            onChange={e => setResponsavel(e.target.value)}
            onFocus={handledResponsavelFocus}
            onBlur={handledResponsavelBlur}
          />
        </DivInput>
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={nome === '' || idade === '' || responsavel === ''}
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
