import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import { Container } from './style';

export default () => {
  const [usuarios, setUsuarios] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function carregarUsuarios() {
      const response = await api.get('/bemVindo');
      response.data.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      const responseTotal = await api.get('/bemVindo/contagem');

      setUsuarios(response.data);
      setTotal(responseTotal.data.total);
    }

    carregarUsuarios();
  }, []);

  return (
    <Container>
      <div>
        <h3>
          Total:&nbsp;
          {total}
        </h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th className="deskOnly">E-mail</th>
            <th>Situação</th>
            <th className="deskOnly">Vai em célula</th>
            <th className="deskOnly">Líder célula</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => (
            <tr key={usuario._id}>
              <td>{i + 1}</td>
              <td className="linha">
                <p>{usuario.nome}</p>
              </td>
              <td className="linha numero">
                <p>{usuario.telefone}</p>
              </td>
              <td className="linha deskOnly">
                <p>{usuario.email}</p>
              </td>
              <td className="linha">
                <p>
                  {usuario.batismoNovoMembro === 'batismo'
                    ? 'Batismo'
                    : 'Novo Membro'}
                </p>
              </td>
              <td className="linha numero deskOnly">
                <p>{usuario.participaCelula ? 'Sim' : 'Não'}</p>
              </td>
              <td className="linha deskOnly">
                <p>{usuario.participaCelula ? usuario.nomeLider : '-'}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
