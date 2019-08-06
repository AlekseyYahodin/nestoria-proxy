const cors = require('cors');
const express = require('express');
const app = express();
const proxy = require('./proxy');

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions), async (req, res) => {
  const path = req.path;
  const method = req.method;
  const qs = req.query;
  const body = req.body;

  const response = await proxy(path, method, qs, body);

  res.set(response.headers);
  res.status(response.statusCode);
  res.send(response.body);
});

app.listen(3000);
