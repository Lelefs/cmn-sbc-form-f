import React, { useState, useCallback } from 'react';
import { isAfter } from 'date-fns';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import { FiUser, FiMail } from 'react-icons/fi';
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
  const dataFinal = new Date(2020, 10, 16, 23, 59, 59);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [telefone, setTelefone] = useState('');
  const [telefoneIsFocused, setTelefoneIsFocused] = useState(false);

  const [email, setEmail] = useState('');
  const [emailIsFocused, setEmailIsFocused] = useState(false);

  const [batismoNovoMembro, setBatismoNovoMembro] = useState('');

  const [participaCelula, setParticipaCelula] = useState(false);

  const [nomeLider, setNomeLider] = useState('');
  const [nomeLiderIsFocused, setNomeLiderIsFocused] = useState(false);

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
    setTelefoneIsFocused(false);
  }, []);

  const handledEmailFocus = useCallback(() => {
    setEmailIsFocused(true);
  }, []);

  const handledEmailBlur = useCallback(() => {
    setEmailIsFocused(false);
  }, []);

  const handledNomeLiderFocus = useCallback(() => {
    setNomeLiderIsFocused(true);
  }, []);

  const handledNomeLiderBlur = useCallback(() => {
    setNomeLiderIsFocused(false);
  }, []);

  function handleChangeBatismoNovoMembro(event) {
    const { target } = event;

    if (target.name === 'batismo') {
      setBatismoNovoMembro('batismo');
    } else {
      setBatismoNovoMembro('novoMembro');
    }
  }

  function handleChangeParticipaCelula(event) {
    const { target } = event;

    if (target.name === 'sim') {
      setParticipaCelula(true);
    } else {
      setParticipaCelula(false);
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

    const emailValido = validate(email);

    if (!emailValido) {
      alert('Insira um e-mail válido');
      return;
    }

    if (nomeLider.length > 40) {
      alert('Por favor insira apenas o primeiro nome do(s) líder(es)');
      return;
    }

    setLoader(true);

    api
      .post('/bemVindo', {
        nome,
        telefone,
        email,
        batismoNovoMembro,
        participaCelula,
        nomeLider,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'bemVindo' });
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
            max={99999999999}
            onChange={e => setTelefone(e.target.value)}
            onFocus={handledTelefoneFocus}
            onBlur={handledTelefoneBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="emailInput">
          E-mail
          <span> *</span>
        </label>
        <DivInput isFilled={!!email} isFocused={emailIsFocused}>
          <FiMail size={20} />
          <input
            type="text"
            id="emailInput"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={handledEmailFocus}
            onBlur={handledEmailBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label>
          Candidato ao batismo ou novo membro?
          <span> *</span>
        </label>
        <DivCheckbox>
          <input
            type="radio"
            id="batismoInput"
            name="batismo"
            checked={batismoNovoMembro === 'batismo'}
            onChange={handleChangeBatismoNovoMembro}
          />
          <label htmlFor="batismoInput">Candidato ao batismo</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="radio"
            id="novoMembroInput"
            name="novoMembro"
            checked={batismoNovoMembro === 'novoMembro'}
            onChange={handleChangeBatismoNovoMembro}
          />
          <label htmlFor="novoMembroInput">Novo membro</label>
        </DivCheckbox>
      </DivLabelInput>

      <DivLabelInput>
        <label>
          Participa de alguma célula da Comunidade?
          <span> *</span>
        </label>
        <DivCheckbox>
          <input
            type="radio"
            id="simInput"
            name="sim"
            checked={participaCelula}
            onChange={handleChangeParticipaCelula}
          />
          <label htmlFor="simInput">Sim</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="radio"
            id="naoInput"
            name="nao"
            checked={!participaCelula}
            onChange={handleChangeParticipaCelula}
          />
          <label htmlFor="naoInput">Não</label>
        </DivCheckbox>
      </DivLabelInput>

      {participaCelula && (
        <DivLabelInput>
          <label htmlFor="nomeLiderInput">
            Nome do líder de célula
            <span> *</span>
          </label>
          <DivInput isFilled={!!nomeLider} isFocused={nomeLiderIsFocused}>
            <FiUser size={20} />
            <input
              type="text"
              id="nomeLiderInput"
              placeholder="Nome do líder de célula"
              value={nomeLider}
              onChange={e => setNomeLider(e.target.value)}
              onFocus={handledNomeLiderFocus}
              onBlur={handledNomeLiderBlur}
            />
          </DivInput>
        </DivLabelInput>
      )}

      <Button
        onClick={handleSubmitForm}
        disabled={
          nome === '' ||
          telefone === '' ||
          email === '' ||
          batismoNovoMembro === '' ||
          (participaCelula && nomeLider === '')
        }
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
