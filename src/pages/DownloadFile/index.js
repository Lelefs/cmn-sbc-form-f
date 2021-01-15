import React, { useState, useEffect } from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import api from '../../services/api';

import { Container, Button } from './styles';

export default () => {
  const [inscricoes, setInscricoes] = useState([]);
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  useEffect(() => {
    async function carregarInscricoes() {
      const response = await api.get('/staff/all');
      response.data.sort(function (a, b) {
        return a.nome1 < b.nome1 ? -1 : a.nome1 > b.nome1 ? 1 : 0;
      });

      const novoArray = await response.data.map(inscricao => ({
        Nome: inscricao.nome,
        Célula: inscricao.celula,
        Idade: inscricao.idade,
        Batizado: inscricao.batizado ? 'Sim' : 'Não',
        Telefone: inscricao.telefone,
        Aptidões: inscricao.aptidoes.join('; '),
      }));

      setInscricoes(state => response.data);

      const ws = XLSX.utils.json_to_sheet(novoArray);
      const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(
        data,
        `Inscrições treinamento Staff 2021${fileExtension}`,
      );
    }

    carregarInscricoes();
  }, []);

  function downloadData(csvData, fileName) {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }

  return (
    <Container>
      <h1>Treinamento Staff 2021</h1>
      <p>O download automático não iniciou? Clique no botão abaixo.</p>
      <Button
        onClick={() =>
          downloadData(inscricoes, 'Inscrições treinamento Staff 2021')
        }
      >
        Download
      </Button>
    </Container>
  );
};
