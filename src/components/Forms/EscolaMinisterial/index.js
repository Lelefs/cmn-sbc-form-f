import React, { useState, useCallback } from 'react';
import { isAfter } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TiSortNumerically } from 'react-icons/ti';
import api from '../../../services/api';

import { Container, DivLabelInput, DivInput, Button } from './styles';

export default () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const dataFinal = new Date(2021, 2, 14, 23, 59, 59);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celula, setCelula] = useState('');
  const [celulaIsFocused, setCelulaIsFocused] = useState(false);

  const [tempoComunidade, setTempoComunidade] = useState('');
  const [tempoComunidadeIsFocused, setTempoComunidadeIsFocused] = useState(
    false,
  );

  const [telefone, setTelefone] = useState('');
  const [telefoneIsFocused, setTelefoneIsFocused] = useState(false);

  const handledNomeFocus = useCallback(() => {
    setNomeIsFocused(true);
  }, []);

  const handledNomeBlur = useCallback(() => {
    setNomeIsFocused(false);
  }, []);

  const handledTelefoneFocus = useCallback(() => {
    setTelefoneIsFocused(true);
  }, []);

  const handledTelefoneBlur = useCallback(() => {
    if (telefone.length > 11) {
      const novoTelefone = telefone.slice(0, 11);
      setTelefone(novoTelefone);
    }

    setTelefoneIsFocused(false);
  }, [telefone]);

  const handledCelulaFocus = useCallback(() => {
    setCelulaIsFocused(true);
  }, []);

  const handledCelulaBlur = useCallback(() => {
    setCelulaIsFocused(false);
  }, []);

  const handledTempoComunidadeFocus = useCallback(() => {
    setTempoComunidadeIsFocused(true);
  }, []);

  const handledTempoComunidadeBlur = useCallback(() => {
    setTempoComunidadeIsFocused(false);
  }, []);

  const handleSubmitForm = async event => {
    event.preventDefault();
    const hoje = new Date();

    if (isAfter(hoje, dataFinal)) {
      return alert(
        'Não foi possível completar sua inscrição. Já expirou o prazo.',
      );
    }

    if (telefone.length < 10 || telefone.length > 11) {
      alert('Insira um telefone válido');
      return;
    }

    setLoader(true);

    api
      .post('/escolaministerial', {
        nome,
        celula,
        tempoComunidade,
        telefone,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'staff' });
      })
      .catch(e => {
        const { error } = e.response.data;
        alert(error);
        setLoader(false);
      });
  };

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="nomeInput">
          Nome completo
          <span> *</span>
        </label>
        <DivInput isFilled={!!nome} isFocused={nomeIsFocused}>
          <FiUser size={20} />
          <input
            type="text"
            id="nomeInput"
            placeholder="Nome completo"
            value={nome}
            onChange={e => setNome(e.target.value)}
            onFocus={handledNomeFocus}
            onBlur={handledNomeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="telefoneInput">
          Celular
          <span> *</span>
        </label>
        <DivInput isFilled={!!telefone} isFocused={telefoneIsFocused}>
          <TiSortNumerically size={20} />
          <input
            type="number"
            id="telefoneInput"
            placeholder="Celular"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            onFocus={handledTelefoneFocus}
            onBlur={handledTelefoneBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="celulaInput">
          Célula
          <span> *</span>
        </label>
        <DivInput isFilled={!!celula} isFocused={celulaIsFocused}>
          <HiOutlineUserGroup size={20} />
          <input
            type="text"
            id="celulaInput"
            placeholder="Célula"
            value={celula}
            onChange={e => setCelula(e.target.value)}
            onFocus={handledCelulaFocus}
            onBlur={handledCelulaBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="tempoComunidadeInput">
          Tempo de Comunidade da Graça SBC
          <span> *</span>
        </label>
        <DivInput
          isFilled={!!tempoComunidade}
          isFocused={tempoComunidadeIsFocused}
        >
          <TiSortNumerically size={20} />
          <input
            type="text"
            id="tempoComunidadeInput"
            placeholder="tempoComunidade"
            value={tempoComunidade}
            onChange={e => setTempoComunidade(e.target.value)}
            onFocus={handledTempoComunidadeFocus}
            onBlur={handledTempoComunidadeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={
          nome === '' ||
          telefone === '' ||
          celula === '' ||
          tempoComunidade === '' ||
          loader
        }
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
