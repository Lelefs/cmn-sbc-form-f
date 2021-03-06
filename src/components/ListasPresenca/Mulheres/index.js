import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { Container } from './style';

export default () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalPresentes, setTotalPresentes] = useState(0);

  async function carregarUsuarios() {
    setLoader(true);
    const response = await api.get(`/mulheres/all`);
    response.data.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });

    const responseTotal = await api.get(`/mulheres/contagem`);

    setUsuarios(response.data);
    setTotal(responseTotal.data.total);
    setTotalPresentes(responseTotal.data.totalPresentes);
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
            <th>Célula</th>
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
                <p>{usuario.celula}</p>
              </td>

              {/* <td className={usuario.compareceu ? 'compareceu linha' : 'linha'}>
                {usuario.compareceu ? (
                  <button
                    type="submit"
                    onClick={() => handleToggleCheckin(usuario, false)}
                  >
                    <FiCheck color="#fff" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => handleToggleCheckin(usuario, true)}
                  >
                    <FiCheck color="#fff" />
                  </button>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
