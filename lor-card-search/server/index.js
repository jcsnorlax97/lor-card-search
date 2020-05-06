const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();

// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(pino);

app.get('/api/greeting', (req, res) => {
    const name = req.query.name || 'World'; // if 'name' is NOT provided, assign 'World' to name.
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        greeting: `Hello ${name}!`
    }));
})

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);