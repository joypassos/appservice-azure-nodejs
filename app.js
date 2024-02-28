const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit-ticket', (req, res) => {
  const { name, companyName, phone, email, title, description } = req.body;

  // Aqui você pode processar os dados do formulário conforme necessário
  // por exemplo, você pode armazenar em um banco de dados ou enviar por e-mail.

  res.send('Chamado registrado com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

