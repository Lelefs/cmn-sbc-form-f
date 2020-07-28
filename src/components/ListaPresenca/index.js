import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';

import { FiCheck } from 'react-icons/fi';

export default ({ horarioCulto }) => {
  const proximoDia = 2;

  const [usuarios, setUsuarios] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function carregarUsuarios() {
      const response = await api.get(`/form/${proximoDia}/${horarioCulto}`);
      response.data.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
      });
      setUsuarios(response.data);
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
      setUsuarios(response.data);
      setLoader(false);
    },
    [horarioCulto],
  );

  return (
    <>
      {loader && (
        <div className="divLoader">
          <p>Aguarde...</p>
        </div>
      )}

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
    </>
  );
};
