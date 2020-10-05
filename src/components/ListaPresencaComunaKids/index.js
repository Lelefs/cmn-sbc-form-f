import React, { useEffect, useState, useCallback } from 'react';
import { FiCheck } from 'react-icons/fi';
import api from '../../services/api';

import { Container } from './style';

export default () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPresentes, setTotalPresentes] = useState(0);

  useEffect(() => {
    async function carregarUsuarios() {
      const response = await api.get('/comunaKids');
      response.data.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      const responseTotal = await api.get('/comunaKids/contagem');

      setUsuarios(response.data);
      setTotal(responseTotal.data.total);
      setTotalPresentes(responseTotal.data.totalPresentes);
    }

    carregarUsuarios();
  }, []);

  const handleToggleCheckin = useCallback(async usuario => {
    setLoader(true);
    await api.put('/comunaKids', { _id: usuario._id });

    const response = await api.get('/comunaKids');
    response.data.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
    const responseTotal = await api.get('/comunaKids/contagem');

    setUsuarios(response.data);
    setTotal(responseTotal.data.total);
    setTotalPresentes(responseTotal.data.totalPresentes);

    setLoader(false);
  }, []);

  return (
    <Container>
      {loader && (
        <div className="divLoader">
          <p>Aguarde...</p>
        </div>
      )}

      <div>
        <h3>
          Total:&nbsp;
          {total}
        </h3>
        <h3>
          Total presentes:&nbsp;
          {totalPresentes}
        </h3>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Responsavel</th>
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
              <td
                className={
                  usuario.compareceu
                    ? 'compareceu linha numero'
                    : 'linha numero'
                }
              >
                <p>{usuario.idade}</p>
              </td>
              <td className={usuario.compareceu ? 'compareceu linha' : 'linha'}>
                <p>{usuario.responsavel}</p>
              </td>
              <td
                className={
                  usuario.compareceu
                    ? 'compareceu linha centralizar'
                    : 'linha centralizar'
                }
              >
                <button
                  type="submit"
                  onClick={() => handleToggleCheckin(usuario)}
                >
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
