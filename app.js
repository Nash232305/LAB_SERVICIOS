const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World desde Node y Express</h1>
    <p>Servidor corriendo en Debian sin Nginx ni proxy reverso.</p>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
