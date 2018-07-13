require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const port = 3001
const app = express()

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    }).catch(err => console.log(err))


app.use(bodyParser.json())


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})