import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { Container } from './styles';

export default () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);

  async function carregarUsuarios() {
    setLoader(true);
    const response = await api.get('/escolaministerial/all');
    response.data.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    setUsuarios(response.data);
    setTotal(response.data.length);
    setLoader(false);
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <Container>
      {loader && (
        <div className="divLoader">
          <p>Aguarde...</p>
        </div>
      )}

      <div>
        <h3>Total: {total}</h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th>Célula</th>
            <th>Tempo comunidade</th>
            <th>Telefone</th>
            <th>Líder/Aux</th>
            <th>Pretende ser líder</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => (
            <tr key={usuario._id}>
              <td>{i + 1}</td>
              <td>
                <p>{usuario.nome}</p>
              </td>
              <td>
                <p>{usuario.celula}</p>
              </td>
              <td>
                <p>{usuario.tempoComunidade}</p>
              </td>
              <td>
                <p>{usuario.telefone}</p>
              </td>
              <td>
                <p>{usuario.liderAuxiliar ? 'Sim' : 'Não'}</p>
              </td>
              <td>
                <p>
                  {usuario.liderAuxiliar
                    ? '-'
                    : usuario.pretendeSerLider
                    ? 'Sim'
                    : 'Não'}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
