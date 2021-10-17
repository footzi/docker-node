const express = require('express')
const app = express()
const port = process.env.CLIENT_PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Client listening at http://localhost:${port}`)
})
