const getHouses = (req, res, next) => {
    const db = req.app.get('db')
    db.get_houses().then(houser => {
        res.status(200).send(houser)
    }).catch(err => { console.log(err) })
}

const addHouse = (req, res, next) => {
    const { name, address, city, state, zipcode } = req.body
    const db = req.app.get('db')
    db.add_house([name, address, city, state, zipcode]).then(() => {
        res.status(200).send('Nice!!')
    }).catch(err => { console.log(err) })
}

const deleteHouse = (req, res, next) => {
    console.log(req.params.id)
    const db = req.app.get('db')
    db.delete_house(req.params.id).then(() => {
        res.status(200).send('yay')
    }).catch(err => console.log(err))
}

module.exports = {
    getHouses,
    addHouse,
    deleteHouse
}