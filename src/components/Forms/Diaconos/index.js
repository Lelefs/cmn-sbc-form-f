import React, { useState, useCallback } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import { FiMail, FiUser, FiPhone } from 'react-icons/fi';
import api from '../../../services/api';

import {
  Container,
  DivLabelInput,
  DivInput,
  DivCheckbox,
  Button,
} from './styles';

export default () => {
  const [dias, setDias] = useState([
    { name: 0, semana: 'Terça', periodo: '', dia: 2, checked: false },
    { name: 1, semana: 'Domingo', periodo: 'manhã', dia: 7, checked: false },
    { name: 2, semana: 'Domingo', periodo: 'noite', dia: 7, checked: false },
    { name: 3, semana: 'Terça', periodo: '', dia: 9, checked: false },
    { name: 4, semana: 'Domingo', periodo: 'manhã', dia: 14, checked: false },
    { name: 5, semana: 'Domingo', periodo: 'noite', dia: 14, checked: false },
    { name: 6, semana: 'Terça', periodo: '', dia: 16, checked: false },
    { name: 7, semana: 'Domingo', periodo: 'manhã', dia: 21, checked: false },
    { name: 8, semana: 'Domingo', periodo: 'noite', dia: 21, checked: false },
    { name: 9, semana: 'Terça', periodo: '', dia: 23, checked: false },
    { name: 10, semana: 'Domingo', periodo: 'manhã', dia: 28, checked: false },
    { name: 11, semana: 'Domingo', periodo: 'noite', dia: 28, checked: false },
  ]);
  const hoje = new Date().getDate();

  const [diasSelecionados, setDiasSelecionados] = useState([]);

  const history = useHistory();
  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState('');
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [emailIsErrored, setEmailIsErrored] = useState(false);

  const [nome, setNome] = useState('');
  const [nomeIsFocused, setNomeIsFocused] = useState(false);

  const [celular, setCelular] = useState('');
  const [celularIsFocused, setCelularIsFocused] = useState(false);

  const handledEmailFocus = useCallback(() => {
    setEmailIsFocused(true);
  }, []);

  const handledEmailBlur = useCallback(() => {
    setEmailIsFocused(false);
    setEmailIsErrored(false);
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

  const handleCheckboxChange = useCallback(
    event => {
      const array = dias;
      array[event.target.name].checked = event.target.checked;
      setDias(array);
      setDiasSelecionados(dias.filter(dia => dia.checked));
    },
    [dias],
  );

  const handleSubmitForm = async event => {
    event.preventDefault();

    const emailValido = validate(email);

    if (!emailValido) {
      alert('Insira um e-mail válido');
      setEmailIsErrored(true);
      return;
    }

    setLoader(true);

    api
      .post('/form', {
        nome,
        email,
        telefone: celular,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'cultoPresencial' });
      })
      .catch(e => {
        alert(e.response.data);
        setLoader(false);
      });
  };

  return (
    <Container>
      <DivLabelInput>
        <label htmlFor="emailInput">
          Endereço de e-mail <span>*</span>
        </label>
        <DivInput
          isFilled={!!email}
          isFocused={emailIsFocused}
          isErrored={emailIsErrored}
        >
          <FiMail size={20} />
          <input
            type="email"
            id="emailInput"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={handledEmailFocus}
            onBlur={handledEmailBlur}
          />
        </DivInput>
      </DivLabelInput>

      <DivLabelInput>
        <label htmlFor="nomeCompletoInput">
          Nome completo <span>*</span>
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
          Celular <span>*</span>
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

      <DivLabelInput>
        <label>
          Selecione os dias que você está disponível <span>*</span>
        </label>
        {dias.map(dia => (
          <DivCheckbox key={dia.name} disabled={dia.dia < hoje}>
            <input
              type="checkbox"
              name={dia.name}
              id={dia.name}
              defaultChecked={dia.checked}
              value={dia.checked}
              onChange={handleCheckboxChange}
              disabled={dia.dia < hoje}
            />
            <label htmlFor={dia.name}>
              {dia.dia}/02 - {dia.semana} {dia.periodo}
            </label>
          </DivCheckbox>
        ))}
      </DivLabelInput>

      <Button
        onClick={handleSubmitForm}
        disabled={
          email === '' ||
          nome === '' ||
          celular === '' ||
          celular.length < 8 ||
          diasSelecionados.length === 0 ||
          loader
        }
      >
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
