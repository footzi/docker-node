const express = require('express')
const cors = require('cors');
const { Client } = require('pg')

const app = express()
const port = process.env.SERVER_PORT || 3000;

const client = new Client()

client.connect();

app.use(cors({
    origin: '*'
}));

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        data: 'hello world'
    })
})

app.post('/create-user', async (req, response) => {
    const name = req.body.name;
    const queryText = 'INSERT INTO accounts (name) VALUES($1);'

    client.query(queryText, [name], (err, res) => {
        response.send();
        client.end()
    })
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
