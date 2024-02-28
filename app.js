const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const app = express();
const port = 3000;
const secretKey = 'suaChaveSecreta'; // Substitua pela sua chave secreta para JWT

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'user', password: 'user123', role: 'user' }
];

let tickets = [];

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });

    req.user = user;
    next();
  });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, secretKey);
  res.json({ token });
});

app.get('/', authenticateToken, (req, res) => {
  res.send('Bem-vindo ao sistema de abertura de chamados Help Desk');
});

app.get('/tickets', authenticateToken, (req, res) => {
  res.json(tickets);
});

app.post('/create-ticket', authenticateToken, (req, res) => {
  const { title, description, priority } = req.body;

  if (!title || !description || !priority) {
    return res.status(400).json({ error: 'Por favor, preencha todos os campos.' });
  }

  const newTicket = {
    id: uuid.v4(),
    title,
    description,
    priority,
    status: 'Aberto',
    assignedTo: null,
    createdBy: req.user.username,
    createdAt: new Date()
  };

  tickets.push(newTicket);

  res.json(newTicket);
});

app.put('/update-ticket/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { title, description, priority, status, assignedTo } = req.body;

  const ticketIndex = tickets.findIndex(t => t.id === id);

  if (ticketIndex === -1) {
    return res.status(404).json({ error: 'Ticket não encontrado' });
  }

  tickets[ticketIndex] = {
    ...tickets[ticketIndex],
    title: title || tickets[ticketIndex].title,
    description: description || tickets[ticketIndex].description,
    priority: priority || tickets[ticketIndex].priority,
    status: status || tickets[ticketIndex].status,
    assignedTo: assignedTo || tickets[ticketIndex].assignedTo
  };

  res.json(tickets[ticketIndex]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
