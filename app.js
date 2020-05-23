const express = require('express');
const app = express();
const CodeBreaker = require('./code-breaker');

app.get('/validate', (req, res) => {
    const secret = req.query.secret;
    let cb = new CodeBreaker();
    res.json({
        result: cb.validate(secret)
    });
});

module.exports = app;