import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { Container, Button } from './styles';

export default () => {
  const [inscricoes, setInscricoes] = useState([]);
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  useEffect(() => {
    async function carregarInscricoes() {
      const response = await api.get('/cursoCasados/all');
      response.data.sort(function (a, b) {
        return a.nome1 < b.nome1 ? -1 : a.nome1 > b.nome1 ? 1 : 0;
      });

      const novoArray = await response.data.map(inscricao => ({
        'Nome dele': inscricao.nome1,
        'E-mail dele': inscricao.email1,
        'Ele participa célula': inscricao.participaCelula1,
        'Célula dele': inscricao.celula1,
        Baizado: inscricao.batizado1,
        'Nome dela': inscricao.nome2,
        'E-mail dela': inscricao.email2,
        'Ela participa célula': inscricao.participaCelula2,
        'Célula dela': inscricao.celula2,
        Baizada: inscricao.batizado2,
      }));

      setInscricoes(state => response.data);

      const ws = XLSX.utils.json_to_sheet(novoArray);
      const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(
        data,
        'Inscrições curso Casados e Felizes 2020' + fileExtension,
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
      <h1>Curso Casados e Felizes 2020</h1>
      <p>O download automático não iniciou? Clique no botão abaixo.</p>
      <Button
        onClick={() =>
          downloadData(inscricoes, 'Inscrições curso Casados e Felizes 2020')
        }
      >
        Download
      </Button>
    </Container>
  );
};
