import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

import { Container } from './style';

import { FiCheck } from 'react-icons/fi';

export default ({ horarioCulto }) => {
  const proximoDia = 16;

  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPresentes, setTotalPresentes] = useState(0);

  useEffect(() => {
    async function carregarUsuarios() {
      const response = await api.get(`/form/${proximoDia}/${horarioCulto}`);
      response.data.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      const responseTotal = await api.get(
        `/form/contagem/${proximoDia}/${horarioCulto}`,
      );

      setUsuarios(response.data);
      setTotal(responseTotal.data.total);
      setTotalPresentes(responseTotal.data.totalPresentes);
    }

    carregarUsuarios();
  }, [horarioCulto]);

  const handleToggleCheckin = useCallback(
    async usuario => {
      setLoader(true);
      await api.put('/form', { _id: usuario._id });
      const response = await api.get(`/form/${proximoDia}/${horarioCulto}`);
      response.data.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      const responseTotal = await api.get(
        `/form/contagem/${proximoDia}/${horarioCulto}`,
      );

      setUsuarios(response.data);
      setTotal(responseTotal.data.total);
      setTotalPresentes(responseTotal.data.totalPresentes);
      setLoader(false);
    },
    [horarioCulto],
  );

  return (
    <Container>
      {loader && (
        <div className="divLoader">
          <p>Aguarde...</p>
        </div>
      )}

      <div>
        <h3>Total: {total}</h3>
        <h3>Total presentes: {totalPresentes}</h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th>Presença</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, i) => (
            <tr key={usuario._id}>
              <td>{i + 1}</td>
              <td className={usuario.compareceu ? 'compareceu linha' : 'linha'}>
                <p>{usuario.nome}</p>
              </td>
              <td className={usuario.compareceu ? 'compareceu linha' : 'linha'}>
                <button onClick={() => handleToggleCheckin(usuario)}>
                  <FiCheck color="#fff" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
