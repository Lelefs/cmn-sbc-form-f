import React, { useState, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../../services/api';

import Input from '../../Input';

import { Container, DivLabelInput, Button, DivCheckbox } from './styles';

export default () => {
  const history = useHistory();
  const formRef = useRef(null);
  const [loader, setLoader] = useState(false);

  const [liderAuxiliar, setLiderAuxiliar] = useState(true);

  const [pretendeSerLider, setPretendeSerLider] = useState(false);

  function handleChangeLiderAuxiliar(event) {
    const { target } = event;

    if (target.name === 'sim') {
      setLiderAuxiliar(true);
    } else {
      setLiderAuxiliar(false);
    }
  }

  function handleChangePretendeSerLider(event) {
    const { target } = event;

    if (target.name === 'sim') {
      setPretendeSerLider(true);
    } else {
      setPretendeSerLider(false);
    }
  }

  const handleSubmit = useCallback(
    async data => {
      if (loader) return;

      setLoader(true);

      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Campo obrigatório'),
          telefone: Yup.string()
            .min(9, 'Digite um número válido')
            .max(12, 'Digite um número válido')
            .required('Campo obrigatório'),
          celula: Yup.string().required('Campo obrigatório'),
          tempoComunidade: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/escolaministerial', {
          nome: data.nome,
          celula: data.celula,
          tempoComunidade: data.tempoComunidade,
          telefone: data.telefone,
          liderAuxiliar,
          pretendeSerLider,
        });

        setLoader(false);
        history.push('/finalizacao', { origem: 'escolaMinisterial' });
      } catch (err) {
        const validationErrors = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        } else {
          const { error } = err.response.data;
          alert(error);
          setLoader(false);
        }
      }
    },
    [loader, history, liderAuxiliar, pretendeSerLider],
  );

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <Input
        name="nome"
        label="Nome completo"
        Icon="nome"
        placeholder="Nome completo"
      />

      <Input
        name="telefone"
        label="Celular"
        Icon="telefone"
        placeholder="Celular"
        type="number"
      />

      <Input name="celula" label="Célula" Icon="celula" placeholder="Célula" />

      <Input
        name="tempoComunidade"
        label="Tempo de comunidade"
        Icon="tempoComunidade"
        placeholder="Tempo de comunidade da Graça SBC"
      />

      <DivLabelInput>
        <label>
          É líder ou auxiliar? <span>*</span>
        </label>
        <DivCheckbox>
          <input
            type="radio"
            id="simLiderAuxiliarInput"
            name="sim"
            checked={liderAuxiliar}
            onChange={handleChangeLiderAuxiliar}
          />
          <label htmlFor="simLiderAuxiliarInput">Sim</label>
        </DivCheckbox>

        <DivCheckbox>
          <input
            type="radio"
            id="naoLiderAuxiliarInput"
            name="nao"
            checked={!liderAuxiliar}
            onChange={handleChangeLiderAuxiliar}
          />
          <label htmlFor="naoLiderAuxiliarInput">Não</label>
        </DivCheckbox>
      </DivLabelInput>

      {!liderAuxiliar && (
        <DivLabelInput>
          <label>
            Pretende ser líder de célula? <span>*</span>
          </label>
          <DivCheckbox>
            <input
              type="radio"
              id="simPretendeSerLiderInput"
              name="sim"
              checked={pretendeSerLider}
              onChange={handleChangePretendeSerLider}
            />
            <label htmlFor="simPretendeSerLiderInput">Sim</label>
          </DivCheckbox>

          <DivCheckbox>
            <input
              type="radio"
              id="naoPretendeSerLiderInput"
              name="nao"
              checked={!pretendeSerLider}
              onChange={handleChangePretendeSerLider}
            />
            <label htmlFor="naoPretendeSerLiderInput">Não</label>
          </DivCheckbox>
        </DivLabelInput>
      )}

      <Button onClick={handleSubmit} disabled={loader}>
        {loader ? 'Aguarde...' : 'Enviar'}
      </Button>
    </Container>
  );
};
