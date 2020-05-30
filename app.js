const express = require('express');
const cors = require('cors');
const app = express();
const codeBreakerInstance = require('./code-breaker').codeBreakerInstance;

app.use(cors());

app.get('/validate', (req, res) => {
  const secret = req.query.secret;
  res.json({
    result: codeBreakerInstance.validate(secret),
  });
});

app.get('/initialize', (req, res) => {
  codeBreakerInstance.generateSecret();
  res.ok();
});

app.get('/set-secret', (req, res) => {
  const secret = req.query.secret;

  codeBreakerInstance.setSecret(secret);

  res.json({
    result: codeBreakerInstance.secret,
  });
});

module.exports = app;
