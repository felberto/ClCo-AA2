const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (request, response) => {
    response.json({info: 'RESTful API up and running'})
});

app.route('/quote').get((req, res) => {
    res.send({author: 'author ABC', quote: 'quote bla bla'})
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
