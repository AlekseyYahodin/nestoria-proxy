const express = require('express');
const app = express();
const proxy = require('./proxy');

app.use(async (req, res) => {
  const path = req.path;
  const method = req.method;
  const qs = req.query;
  const body = req.body;

  const response = await proxy(path, method, qs, body);

  res.set(response.headers);
  res.status(response.statusCode);
  res.set({
      'Access-Control-Allow-Origin': '*'
  });
  res.send(response.body);
});

app.listen(3000);
