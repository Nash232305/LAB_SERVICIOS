const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World desde Node y Express</h1>
    <p>Aplicacion detectada automaticamente  por systemd desde Github.</p>
  `);
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('Error en el servidor:', error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Servidor Express detenido correctamente.');
    process.exit(0);
  });
});
