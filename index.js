const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Caminho para o arquivo txt
const filePath = path.join(__dirname, 'dados', 'arquivo.txt');
console.log('Tentando escrever em:', filePath);

// Rota GET para iniciar a escrita no arquivo
app.get('/start', (req, res) => {
  console.log('Recebido pedido para escrever no arquivo...');

  fs.writeFile(filePath, 'Novo conteúdo do arquivo', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
      res.status(500).send('Erro ao escrever no arquivo.');
      return;
    }

    console.log('Arquivo escrito com sucesso!');
    res.send('Arquivo escrito com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
