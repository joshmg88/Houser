require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const port = 3001
const app = express()
const houseCtrl = require('./houseCtrl')

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
    }).catch(err => console.log(err))

app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json())

app.get('/api/houses', houseCtrl.getHouses)
app.post('/api/houses', houseCtrl.addHouse)
app.delete('/api/houses/:id', houseCtrl.deleteHouse)


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})