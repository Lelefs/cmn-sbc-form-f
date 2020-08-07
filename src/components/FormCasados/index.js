import React, { useState, useCallback } from 'react';
import { validate } from 'email-validator';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { FiMail, FiUser, FiPhone, FiUsers } from 'react-icons/fi';

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

  const [nome1, setNome1] = useState('');
  const [nome1IsFocused, setNome1IsFocused] = useState(false);
  const [email1, setEmail1] = useState('');
  const [email1IsFocused, setEmail1IsFocused] = useState(false);
  const [email1IsErrored, setEmail1IsErrored] = useState(false);
  const [telefone1, setTelefone1] = useState('');
  const [telefone1IsFocused, setTelefone1IsFocused] = useState(false);
  const [participaCelula1, setParticipaCelula1] = useState(false);
  const [celula1, setCelula1] = useState('');
  const [celula1IsFocused, setCelula1IsFocused] = useState(false);
  const [batizado1, setBatizado1] = useState(false);

  const [nome2, setNome2] = useState('');
  const [nome2IsFocused, setNome2IsFocused] = useState(false);
  const [email2, setEmail2] = useState('');
  const [email2IsFocused, setEmail2IsFocused] = useState(false);
  const [email2IsErrored, setEmail2IsErrored] = useState(false);
  const [telefone2, setTelefone2] = useState('');
  const [telefone2IsFocused, setTelefone2IsFocused] = useState(false);
  const [participaCelula2, setParticipaCelula2] = useState(false);
  const [celula2, setCelula2] = useState('');
  const [celula2IsFocused, setCelula2IsFocused] = useState(false);
  const [batizado2, setBatizado2] = useState(false);

  const handledEmailFocus = useCallback(pessoa => {
    if (pessoa === 1) {
      setEmail1IsFocused(true);
    } else {
      setEmail2IsFocused(true);
    }
  }, []);

  const handledEmailBlur = useCallback(pessoa => {
    if (pessoa === 1) {
      setEmail1IsFocused(false);
      setEmail1IsErrored(false);
    } else {
      setEmail2IsFocused(false);
      setEmail2IsErrored(false);
    }
  }, []);

  const handledNomeFocus = useCallback(pessoa => {
    if (pessoa === 1) {
      setNome1IsFocused(true);
    } else {
      setNome2IsFocused(true);
    }
  }, []);

  const handledNomeBlur = useCallback(pessoa => {
    if (pessoa === 1) {
      setNome1IsFocused(false);
    } else {
      setNome2IsFocused(false);
    }
  }, []);

  const handledTelefoneFocus = useCallback(pessoa => {
    if (pessoa === 1) {
      setTelefone1IsFocused(true);
    } else {
      setTelefone2IsFocused(true);
    }
  }, []);

  const handledTelefoneBlur = useCallback(
    pessoa => {
      if (pessoa === 1) {
        if (telefone1.length > 11) {
          const novoTelefone = telefone1.slice(0, 11);
          setTelefone1(novoTelefone);
        }
        setTelefone1IsFocused(false);
      } else {
        if (telefone2.length > 11) {
          const novoTelefone = telefone2.slice(0, 11);
          setTelefone2(novoTelefone);
        }
        setTelefone2IsFocused(false);
      }
    },
    [telefone1, telefone2],
  );

  const toggleChangeBatizado = useCallback((pessoa, booleano) => {
    switch (pessoa) {
      case 1:
        if (booleano === 'sim') {
          setBatizado1(true);
        } else {
          setBatizado1(false);
        }
        break;
      case 2:
        if (booleano === 'sim') {
          setBatizado2(true);
        } else {
          setBatizado2(false);
        }

        break;
      default:
        break;
    }
  }, []);

  const toggleChangeParticipaCelula = useCallback((pessoa, booleano) => {
    switch (pessoa) {
      case 1:
        if (booleano === 'sim') {
          setParticipaCelula1(true);
        } else {
          setParticipaCelula1(false);
        }
        break;
      case 2:
        if (booleano === 'sim') {
          setParticipaCelula2(true);
        } else {
          setParticipaCelula2(false);
        }

        break;
      default:
        break;
    }
  }, []);

  const handledCelulaFocus = useCallback(pessoa => {
    if (pessoa === 1) {
      setCelula1IsFocused(true);
    } else {
      setCelula2IsFocused(true);
    }
  }, []);

  const handledCelulaBlur = useCallback(pessoa => {
    if (pessoa === 1) {
      setCelula1IsFocused(false);
    } else {
      setCelula2IsFocused(false);
    }
  }, []);

  const handleSubmitForm = event => {
    event.preventDefault();
    const hoje = new Date().getDate();

    if (hoje > 26) {
      alert('Não foi possível completar sua inscrição. Já expirou o prazo.');
      return;
    }

    const email1Valido = validate(email1);

    if (!email1Valido) {
      alert('Insira um e-mail válido');
      setEmail1IsErrored(true);
      return;
    }

    const email2Valido = validate(email2);

    if (!email2Valido) {
      alert('Insira um e-mail válido');
      setEmail2IsErrored(true);
      return;
    }

    setLoader(true);

    api
      .post('/cursoCasados', {
        nome1,
        email1,
        telefone1,
        participaCelula1,
        celula1,
        batizado1,
        nome2,
        email2,
        telefone2,
        participaCelula2,
        celula2,
        batizado2,
      })
      .then(res => {
        setLoader(false);
        history.push('/finalizacao', { origem: 'casados' });
      })
      .catch(e => {
        alert(e.response.data.error);
        console.log(e.response.data);
        setLoader(false);
      });
  };

  return (
    <>
      <Container>
        <h1>Informações dele</h1>
        <DivLabelInput>
          <label htmlFor="email1Input">
            Endereço de e-mail <span>*</span>{' '}
          </label>
          <DivInput
            isFilled={!!email1}
            isFocused={email1IsFocused}
            isErrored={email1IsErrored}
          >
            <FiMail size={20} />
            <input
              type="email1"
              id="email1Input"
              placeholder="Seu e-mail"
              value={email1}
              onChange={e => setEmail1(e.target.value)}
              onFocus={() => handledEmailFocus(1)}
              onBlur={() => handledEmailBlur(1)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <label htmlFor="nome1CompletoInput">
            Nome completo <span>*</span>{' '}
          </label>
          <DivInput isFilled={!!nome1} isFocused={nome1IsFocused}>
            <FiUser size={20} />
            <input
              type="text"
              id="nome1CompletoInput"
              placeholder="Seu nome completo"
              value={nome1}
              onChange={e => setNome1(e.target.value)}
              onFocus={() => handledNomeFocus(1)}
              onBlur={() => handledNomeBlur(1)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <label htmlFor="telefone1Input">
            Telefone <span>*</span>{' '}
          </label>
          <DivInput isFilled={!!telefone1} isFocused={telefone1IsFocused}>
            <FiPhone size={20} />
            <input
              type="number"
              id="telefone1Input"
              placeholder="Seu telefone"
              max={99999999999}
              value={telefone1}
              onChange={e => setTelefone1(e.target.value)}
              onFocus={() => handledTelefoneFocus(1)}
              onBlur={() => handledTelefoneBlur(1)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <DivCheckbox style={{ marginBottom: '10px' }}>
            <p>Participa de célula?</p>

            <input
              type="radio"
              id="participaCelula1Sim"
              checked={participaCelula1}
              onChange={() => toggleChangeParticipaCelula(1, 'sim')}
            />
            <label htmlFor="participaCelula1Sim">Sim</label>

            <input
              type="radio"
              id="participaCelula1Nao"
              checked={!participaCelula1}
              onChange={() => toggleChangeParticipaCelula(1, 'nao')}
            />
            <label htmlFor="participaCelula1Nao">Não</label>
          </DivCheckbox>

          <DivLabelInput>
            <label htmlFor="celula1Input">
              Se sim, qual? {participaCelula1 && <span>*</span>}
            </label>
            <DivInput
              isFilled={!!celula1}
              isFocused={celula1IsFocused}
              readOnly={!participaCelula1}
              style={{ marginTop: '5px' }}
            >
              <FiUsers size={20} />
              <input
                type="text"
                id="celula1Input"
                placeholder="Sua célula"
                readOnly={!participaCelula1}
                value={celula1}
                onChange={e => setCelula1(e.target.value)}
                onFocus={() => handledCelulaFocus(1)}
                onBlur={() => handledCelulaBlur(1)}
              />
            </DivInput>
          </DivLabelInput>
        </DivLabelInput>

        <DivCheckbox>
          <p>É batizado?</p>

          <input
            type="radio"
            id="batizado1Sim"
            checked={batizado1}
            onChange={() => toggleChangeBatizado(1, 'sim')}
          />
          <label htmlFor="batizado1Sim">Sim</label>

          <input
            type="radio"
            id="batizado1Nao"
            checked={!batizado1}
            onChange={() => toggleChangeBatizado(1, 'nao')}
          />
          <label htmlFor="batizado1Nao">Não</label>
        </DivCheckbox>
      </Container>

      <Container>
        <h1>Informações dela</h1>
        <DivLabelInput>
          <label htmlFor="email2Input">
            Endereço de e-mail <span>*</span>{' '}
          </label>
          <DivInput
            isFilled={!!email2}
            isFocused={email2IsFocused}
            isErrored={email2IsErrored}
          >
            <FiMail size={20} />
            <input
              type="email2"
              id="email2Input"
              placeholder="Seu e-mail"
              value={email2}
              onChange={e => setEmail2(e.target.value)}
              onFocus={() => handledEmailFocus(2)}
              onBlur={() => handledEmailBlur(2)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <label htmlFor="nome2CompletoInput">
            Nome completo <span>*</span>{' '}
          </label>
          <DivInput isFilled={!!nome2} isFocused={nome2IsFocused}>
            <FiUser size={20} />
            <input
              type="text"
              id="nome2CompletoInput"
              placeholder="Seu nome completo"
              value={nome2}
              onChange={e => setNome2(e.target.value)}
              onFocus={() => handledNomeFocus(2)}
              onBlur={() => handledNomeBlur(2)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <label htmlFor="telefone2Input">
            Telefone <span>*</span>{' '}
          </label>
          <DivInput isFilled={!!telefone2} isFocused={telefone2IsFocused}>
            <FiPhone size={20} />
            <input
              type="number"
              id="telefone2Input"
              placeholder="Seu telefone"
              max={99999999999}
              value={telefone2}
              onChange={e => setTelefone2(e.target.value)}
              onFocus={() => handledTelefoneFocus(2)}
              onBlur={() => handledTelefoneBlur(2)}
            />
          </DivInput>
        </DivLabelInput>

        <DivLabelInput>
          <DivCheckbox style={{ marginBottom: '10px' }}>
            <p>Participa de célula?</p>

            <input
              type="radio"
              id="participaCelula2Sim"
              checked={participaCelula2}
              onChange={() => toggleChangeParticipaCelula(2, 'sim')}
            />
            <label htmlFor="participaCelula2Sim">Sim</label>

            <input
              type="radio"
              id="participaCelula2Nao"
              checked={!participaCelula2}
              onChange={() => toggleChangeParticipaCelula(2, 'nao')}
            />
            <label htmlFor="participaCelula2Nao">Não</label>
          </DivCheckbox>

          <DivLabelInput>
            <label htmlFor="celula2Input">
              Se sim, qual? {participaCelula2 && <span>*</span>}{' '}
            </label>
            <DivInput
              isFilled={!!celula2}
              isFocused={celula2IsFocused}
              readOnly={!participaCelula2}
              style={{ marginTop: '5px' }}
            >
              <FiUsers size={20} />
              <input
                type="text"
                id="celula2Input"
                placeholder="Sua célula"
                readOnly={!participaCelula2}
                value={celula2}
                onChange={e => setCelula2(e.target.value)}
                onFocus={() => handledCelulaFocus(2)}
                onBlur={() => handledCelulaBlur(2)}
              />
            </DivInput>
          </DivLabelInput>
        </DivLabelInput>

        <DivCheckbox>
          <p>É batizada?</p>

          <input
            type="radio"
            id="batizado2Sim"
            checked={batizado2}
            onChange={() => toggleChangeBatizado(2, 'sim')}
          />
          <label htmlFor="batizado2Sim">Sim</label>

          <input
            type="radio"
            id="batizado2Nao"
            checked={!batizado2}
            onChange={() => toggleChangeBatizado(2, 'nao')}
          />
          <label htmlFor="batizado2Nao">Não</label>
        </DivCheckbox>

        <Button
          onClick={handleSubmitForm}
          disabled={
            email1 === '' ||
            nome1 === '' ||
            telefone1.length < 8 ||
            (participaCelula1 && celula1 === '') ||
            email2 === '' ||
            nome2 === '' ||
            telefone2.length < 8 ||
            (participaCelula2 && celula2 === '')
          }
        >
          {loader ? 'Aguarde...' : 'Enviar'}
        </Button>
      </Container>
    </>
  );
};
