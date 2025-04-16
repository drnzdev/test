const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const filePath = path.join(__dirname, 'dados', 'arquivo.txt');
app.get('/start', (req, res) => {
fs.writeFile(filePath, 'Novo conteúdo do arquivo', (err) => {
    if (err) {
      console.error('Erro ao escrever o arquivo:', err);
      res.status(500).send('Erro ao escrever no arquivo.');
      return;
    }

    res.send('Arquivo escrito com sucesso!');
  });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
