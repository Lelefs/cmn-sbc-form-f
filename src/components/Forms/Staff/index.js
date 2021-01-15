import React, { useState, useCallback } from 'react';
import { isAfter } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TiSortNumerically } from 'react-icons/ti';
import api from '../../../services/api';

import {
  Container,
  DivLabelInput,
  DivInput,
  DivCheckbox,
  Button,
} from './styles';

export default () => {
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const dataFinal = new Date(2021, 1, 3, 23, 59, 59);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celula, setCelula] = useState('');
  const [celulaIsFocused, setCelulaIsFocused] = useState(false);

  const [idade, setIdade] = useState('');
  const [idadeIsFocused, setIdadeIsFocused] = useState(false);

  const [telefone, setTelefone] = useState('');
  const [telefoneIsFocused, setTelefoneIsFocused] = useState(false);

  const [batizado, setBatizado] = useState(false);

  const [aptidoes, setAptidoes] = useState([]);

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

  const handledIdadeFocus = useCallback(() => {
    setIdadeIsFocused(true);
  }, []);

  const handledIdadeBlur = useCallback(() => {
    if (idade.length > 3) {
      const novaIdade = idade.slice(0, 3);
      setIdade(novaIdade);
    }

    setIdadeIsFocused(false);
  }, [idade]);

  const toogleAptidoes = useCallback(event => {
    event.persist();

    if (event.target.checked) {
      setAptidoes(state => [...state, event.target.name]);
    } else {
      setAptidoes(state => state.filter(a => a !== event.target.name));
    }
  }, []);

  function handleChangeBatizado(event) {
    const { target } = event;

    if (target.name === 'sim') {
      setBatizado(true);
    } else {
      setBatizado(false);
    }
  }

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
      .post('/staff', {
        nome,
        celula,
        idade,
        batizado,
        aptidoes,
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
        <label htmlFor="idadeInput">
          Idade
          <span> *</span>
        </label>
        <DivInput isFilled={!!idade} isFocused={idadeIsFocused}>
          <TiSortNumerically size={20} />
          <input
            type="number"
            id="idadeInput"
            placeholder="Idade"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            onFocus={handledIdadeFocus}
            onBlur={handledIdadeBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label>
          É batizado?
          <span> *</span>
        </label>
        <DivCheckbox>
          <input
            type="radio"
            id="simInput"
            name="sim"
            checked={batizado}
            onChange={handleChangeBatizado}
          />
          <label htmlFor="simInput">Sim</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="radio"
            id="naoInput"
            name="nao"
            checked={!batizado}
            onChange={handleChangeBatizado}
          />
          <label htmlFor="naoInput">Não</label>
        </DivCheckbox>
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
        <label>
          Aptidões
          <span> *</span>
        </label>
        <DivCheckbox>
          <input
            type="checkbox"
            id="concentradoInput"
            name="Concentrado"
            onClick={toogleAptidoes}
          />
          <label htmlFor="concentradoInput">Concentrado</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="disponibilidadeInput"
            name="Disponibilidade"
            onClick={toogleAptidoes}
          />
          <label htmlFor="disponibilidadeInput">Disponibilidade</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="facilidadeEmFotografarEFilmarInput"
            name="Facilidade em fotografar e filmar"
            onClick={toogleAptidoes}
          />
          <label htmlFor="facilidadeEmFotografarEFilmarInput">
            Facilidade em fotografar e filmar
          </label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="facilidadeEmMaisTarefaInput"
            name="Facilidade em mais de uma tarefa ao mesmo tempo"
            onClick={toogleAptidoes}
          />
          <label htmlFor="facilidadeEmMaisTarefaInput">
            Facilidade em mais de uma tarefa ao mesmo tempo
          </label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="usoComputadorInput"
            name="Facilidade em uso de computador"
            onClick={toogleAptidoes}
          />
          <label htmlFor="usoComputadorInput">
            Facilidade em uso de computador
          </label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="checkbox"
            id="timidezInput"
            name="Sem timidez"
            onClick={toogleAptidoes}
          />
          <label htmlFor="timidezInput">Sem timidez</label>
        </DivCheckbox>
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={
          nome === '' ||
          telefone === '' ||
          celula === '' ||
          parseInt(idade, 10) <= 0 ||
          parseInt(idade, 10) >= 115 ||
          idade === '' ||
          aptidoes.length === 0 ||
          loader
        }
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
